import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const apiKey = process.env.SKYFI_API_KEY;
  const { searchParams } = new URL(req.url);
  const nextPage = searchParams.get("nextPage");

  if (!nextPage) {
    return NextResponse.json({ error: "Missing nextPage URL" }, { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://app.skyfi.com${nextPage}`,
      {
        headers: {
          "X-Skyfi-Api-Key": apiKey!,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    let message = "Unknown error";
    if (axios.isAxiosError(error)) {
      message = error.message;

      if (process.env.NODE_ENV === "development") {
        console.error("SkyFi response data:", error.response?.data);
        console.error("SkyFi response status:", error.response?.status);
      }
    } else if (error instanceof Error) {
      message = error.message;
    }

    if (process.env.NODE_ENV === "development") {
      console.error("SkyFi API error (GET):", message);
    }

    return NextResponse.json(
      { error: "Failed to fetch next page", detail: message },
      { status: 500 }
    );
  }
}
