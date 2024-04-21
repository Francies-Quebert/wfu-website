'use server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';

const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.UPLOAD_ACCESS_KEY!,
    secretAccessKey: process.env.UPLOAD_SECRET_KEY!,
  },
});

const allowedFileTypes = ['image', 'video'];
type SignedURLResponse = Promise<
  | { failure?: undefined; success: { url: string }; error?: undefined }
  | { failure: string; success?: undefined; error?: any }
>;

export async function getBucketSignedURL(
  fileType: string,
  fileName: string,
): Promise<SignedURLResponse> {
  if (!allowedFileTypes.includes(fileType.split('/')[0])) {
    return { failure: 'File type not allowed' };
  }

  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: fileName + randomUUID(),
  });
  try {
    const url = await getSignedUrl(s3Client, putObjectCommand, {
      expiresIn: 60 * 30,
    });

    return { success: { url } };
  } catch (error) {
    console.log(error);

    return { failure: 'not authenticated' };
  }
}

export const computeSHA256 = async (file: File) => {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
};
