import { promises as fs } from 'node:fs';
import path from 'node:path';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'cv', 'yann-mouandza-cv.pdf');
  const file = await fs.readFile(filePath);

  return new NextResponse(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Yann_Mouandza_CV.pdf"',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
