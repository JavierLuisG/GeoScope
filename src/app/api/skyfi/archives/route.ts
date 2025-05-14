import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  const apiKey = process.env.SKYFI_API_KEY;

  try {
    const body = await req.json();
    const response = await axios.post(
      "https://app.skyfi.com/platform-api/archives",
      body,
      {
        headers: {
          "X-Skyfi-Api-Key": apiKey!,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    }

    if (process.env.NODE_ENV === "development") {
      console.error("SkyFi API error (POST):", message);
    }

    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch SkyFi data" }),
      { status: 500 }
    );
  }
}
