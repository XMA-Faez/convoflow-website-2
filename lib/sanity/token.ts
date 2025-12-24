export const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error(
    "Missing SANITY_API_READ_TOKEN. Please add it to your .env.local file."
  );
}
