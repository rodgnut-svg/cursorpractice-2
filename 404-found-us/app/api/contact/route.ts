import { NextRequest, NextResponse } from "next/server";

// Field mapping configuration - easily customizable for GoHighLevel field names
const FIELD_MAPPING = {
  name: "firstName", // or "name" if GoHighLevel expects that
  company: "companyName", // or "company"
  project: "message", // or "description" or custom field name
  whatsapp: "phone", // WhatsApp number with country code
  email: "email", // Email address
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, project, whatsapp, email } = body;

    // Validate required fields
    if (!name || !company || !project || !whatsapp || !email) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Get webhook URL from environment variable
    const webhookUrl =
      process.env.GOHIGHLEVEL_WEBHOOK_URL ||
      "https://services.leadconnectorhq.com/hooks/d31VoHRqFQkp8xwPkN21/webhook-trigger/CEqtpm0LlNYQwGZjowiN";

    // Map form fields to GoHighLevel payload format
    // whatsapp already includes country code (e.g., "+1234567890")
    const payload = {
      [FIELD_MAPPING.name]: name.trim(),
      [FIELD_MAPPING.company]: company.trim(),
      [FIELD_MAPPING.project]: project.trim(),
      [FIELD_MAPPING.whatsapp]: whatsapp.trim(),
      [FIELD_MAPPING.email]: email.trim(),
    };

    // Prepare headers
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    // Add API key if provided
    if (process.env.GOHIGHLEVEL_API_KEY) {
      headers["Authorization"] = `Bearer ${process.env.GOHIGHLEVEL_API_KEY}`;
      // Alternative header format if needed:
      // headers["X-API-Key"] = process.env.GOHIGHLEVEL_API_KEY;
    }

    // Send POST request to GoHighLevel webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    // Check if request was successful
    if (!response.ok) {
      const errorText = await response.text();
      console.error("GoHighLevel webhook error:", errorText);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to submit form. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Try to parse response if it's JSON, otherwise just check status
    let responseData;
    try {
      responseData = await response.json();
    } catch {
      // Response might not be JSON, that's okay
      responseData = { status: "success" };
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully.",
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

