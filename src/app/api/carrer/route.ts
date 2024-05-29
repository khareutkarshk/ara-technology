import { NextResponse } from "next/server";
import { CarrerModel } from "@/model/Carrer";
import dbConnect from "@/db/dbConnect";
// import { uploadFileToS3 } from "@/utils/s3";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
	region: process.env.AWS_BUCKET_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
	}
});

interface File {
	arrayBuffer: () => Promise<ArrayBuffer>;
	name: string;
}

async function uploadFileToS3(fileBuffer: Buffer, fileName: string): Promise<string> {
	const bucketName = process.env.AWS_BUCKET_NAME!;
	const params = {
		Bucket: bucketName,
		Key: fileName,
		Body: fileBuffer,
		ContentType: "application/pdf",
	};
	const encodedFileName = encodeURIComponent(fileName).replace(/%20/g, "+");

	const command = new PutObjectCommand(params);
	await s3Client.send(command);
	const objectUrl = `https://${bucketName}.s3.amazonaws.com/${encodedFileName}`;
	return objectUrl;
}

export async function POST(request: Request) {
	await dbConnect();
	try {
		const formData = await request.formData();
		console.log(formData);
		
		const { name, email, phone, skills } = Object.fromEntries(formData);

		if ([name, email, phone, skills].some((field) => typeof field === 'string' && field.trim() === "")) {
			return Response.json({ error: "All fields are required." }, { status: 400 });
		}
		
		const file = formData.get("resume") as File | null;

		if (!file) {
			return Response.json({ error: "File is required." }, { status: 400 });
		}

		const buffer = Buffer.from(await file.arrayBuffer());
		const objectUrl = await uploadFileToS3(buffer, file.name);

		const carrer = await CarrerModel.create({
			name,
			email,
			phone,
			skills,
			resume: objectUrl,
			createdAt: new Date()
		})

		return Response.json({ success: true, data: carrer });
	} catch (error) {
		return Response.json({ error: (error as Error).message });
	}
}
