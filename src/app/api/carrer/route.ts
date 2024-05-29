import { NextResponse } from "next/server";
import { CarrerModel } from "@/model/Carrer";
import dbConnect from "@/db/dbConnect";
import { uploadFileToS3 } from "@/utils/s3";

export async function POST(request: Request) {
	await dbConnect();
	try {
		const formData = await request.formData();
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
