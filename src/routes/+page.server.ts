import type { Actions } from "./$types";
import { Buffer } from "buffer";
import { GOOGLE_JSON_KEY_B64, SPREADSHEETS_ID } from "$env/static/private";
import { sheets, auth } from "@googleapis/sheets";

const creds = JSON.parse(
  Buffer.from(GOOGLE_JSON_KEY_B64!, "base64").toString("utf8"),
);

creds.private_key = creds.private_key?.replace(/\\n/g, "\n");

const saAuth = new auth.GoogleAuth({
  credentials: creds,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const client = sheets({ version: "v4", auth: saAuth });

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const website = (data.get("website") ?? "").toString();
    if (website) return { success: true, error: false };

    const email = data.get("email");
    const url = new URL(request.url);
    const source = url.searchParams.get("src") ?? "organic";

    if (!email || typeof email !== "string") {
      return {
        status: 400,
        body: { message: "Invalid email" },
        error: true,
        success: false,
      };
    }

    try {
      await client.spreadsheets.values.append({
        spreadsheetId: SPREADSHEETS_ID,
        range: "Sheet1!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [[email, source]],
        },
      });
    } catch (error: any) {
      console.error(error);
      return {
        status: 500,
        body: { message: error.message },
        error: true,
        success: false,
      };
    }

    return {
      status: 200,
      body: { message: "Success" },
      error: false,
      success: true,
    };
  },
} satisfies Actions;
