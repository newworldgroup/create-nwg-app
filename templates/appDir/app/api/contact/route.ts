import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  return NextResponse.json({ hello: body });

  //   try {
  //     await sgMail.send(msg);
  //     return new Response("Email sent", { status: 200 });
  //   } catch (err) {
  //     return new Response("Error sending email", { status: 500 });
  //   }
}

export async function OPTIONS() {
  return NextResponse.json({
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
