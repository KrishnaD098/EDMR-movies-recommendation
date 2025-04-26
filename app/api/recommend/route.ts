// app/api/recommend/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { current_emotion, desired_emotion } = await req.json();

  const backendUrl = `http://172.20.10.6:5000/recommend?current_emotion=${encodeURIComponent(current_emotion)}&desired_emotion=${encodeURIComponent(desired_emotion)}&top_k=7`;

  try {
    const response = await fetch(backendUrl);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching from backend:', error);
    return NextResponse.json({ error: 'Failed to fetch recommendation' }, { status: 500 });
  }
}
