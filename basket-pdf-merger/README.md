# BasketPDF — Shoot. Score. Merge.

A playful, browser-based PDF merger. Upload multiple PDFs, drag each document-ball into the basketball hoop, and the app automatically merges and downloads the result when every document has scored.

## Features
- Multiple PDF upload with file validation and duplicate detection
- Basketball drag-and-drop hoop challenge
- Automatic merge and download after every PDF is scored
- Remove individual files or reset the game
- Local, in-browser processing with PDF-Lib; documents are not sent to a server
- Responsive layout for desktop and mobile

## Run locally
Open `index.html` in a modern browser. PDF-Lib is loaded from the unpkg CDN, so an internet connection is required for the library.

## Notes
- At least two PDFs are required.
- Password-protected or damaged PDFs may fail to merge.
- Browsers can restrict automatic downloads depending on their settings; the app initiates the download after a successful merge.
- PDF order follows the order in which files are added.
