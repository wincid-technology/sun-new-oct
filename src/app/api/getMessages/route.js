import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'messages.json');

// Load existing messages from file
let messages = [];
if (fs.existsSync(filePath)) {
  const fileData = fs.readFileSync(filePath);
  messages = JSON.parse(fileData);
}

export async function GET() {
  return NextResponse.json(messages);
}

export async function POST(request) {
  const { name, email, phone, message } = await request.json();
  messages.push({ name, email, phone, message });

  // Save messages to file
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  console.log(name, email, phone, message);
  return NextResponse.json({ success: true });
}