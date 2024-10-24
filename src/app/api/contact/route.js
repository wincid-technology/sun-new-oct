import { NextResponse } from "next/server";

// app/api/contact/route.js
export async function POST(request) {
  console.log('Received request');
  try {
    const { name, email, phone, message } = await request.json();
    console.log('Parsed JSON:', { name, email, phone, message });

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ success: false, message: 'All fields are required.' });
    }

    console.log('Received Contact Form:', { name, email, phone, message });

    return NextResponse.json({ success: true, message: 'Message received successfully.' });
  } catch (error) {
    console.error('Error handling form submission:', error);
    return NextResponse.json({ success: false, message: 'Failed to receive message.' });
  }
}


