import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TrimMyPDF — Free PDF tools that never leave your browser';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        <div
          style={{
            width: 140,
            height: 170,
            borderRadius: 28,
            backgroundColor: '#059669',
            display: 'flex',
            marginBottom: 40,
          }}
        />
        <div style={{ fontSize: 72, fontWeight: 800, color: '#111827', display: 'flex' }}>
          TrimMyPDF
        </div>
        <div style={{ fontSize: 32, fontWeight: 400, color: '#6b7280', marginTop: 16, display: 'flex' }}>
          Free PDF tools that never leave your browser
        </div>
      </div>
    ),
    { ...size }
  );
}
