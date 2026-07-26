# TrimMyPDF — starter files

Drop these into the project created earlier with `create-next-app` (same
`src/` structure, so paths match directly).

## Extra dependency needed

The merge logic only needs `pdf-lib` (already installed). The compress logic
also needs `pdfjs-dist` to render pages before re-encoding them:

```bash
npm install pdfjs-dist
```

## Files in this folder

```
src/
├── components/
│   └── DropZone.tsx        # shared drag-and-drop zone, used by both tools
├── lib/pdf/
│   ├── merge.ts             # mergePdfs(files) -> Blob
│   └── compress.ts          # compressPdf(file, quality) -> Blob
└── app/
    ├── merge-pdf/page.tsx
    └── compress-pdf/page.tsx
```

## Known trade-off to know about

`compress.ts` works by rendering each page to a canvas and rebuilding the PDF
from JPEG images (see the comment at the top of the file for why). That's a
reliable way to shrink scanned/image-heavy PDFs client-side, but the output
loses selectable/searchable text — every page becomes a flat image. Worth
flagging on the compress page itself once you add copy, and a good candidate
for a smarter (or server-side) approach later behind the Pro tier.

## Not included yet

- Root `layout.tsx` / homepage (`/`) — still template from `create-next-app`
- FAQ / privacy / about pages
- Any styling pass beyond functional Tailwind classes
