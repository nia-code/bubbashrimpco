import { Client, Storage } from "appwrite";

const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_END_POINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!); // Replace with your project ID

export const storage = new Storage(client);

export const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;
