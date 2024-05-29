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

export async function uploadFileToS3(fileBuffer: Buffer, fileName: string): Promise<string> {
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