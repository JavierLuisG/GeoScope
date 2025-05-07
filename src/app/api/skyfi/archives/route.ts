// app/api/skyfi/archives/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  const apiKey = process.env.SKYFI_API_KEY;
  const body = await req.json();

  try {
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
  } catch (error: any) {
    console.error("Error calling SkyFi API:", error.message);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch SkyFi data" }),
      { status: 500 }
    );
  }
}
