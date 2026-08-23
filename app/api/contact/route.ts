import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Full Name, Email, and Message are required fields." },
        { status: 400 }
      );
    }

    // Process contact request (placeholder for DB/Email integration)
    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out. Our team will get back to you shortly.",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to submit message. Please try again." },
      { status: 500 }
    );
  }
}
