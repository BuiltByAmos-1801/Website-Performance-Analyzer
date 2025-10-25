import { NextResponse } from 'next/server';
import { fetchPageSpeedData } from '@/utils/api';
import type { PageSpeedResult } from '@/types';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { success: false, error: 'URL is required' },
        { status: 400 }
      );
    }

    const data: PageSpeedResult = await fetchPageSpeedData(url);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to analyze website',
      },
      { status: 500 }
    );
  }
}