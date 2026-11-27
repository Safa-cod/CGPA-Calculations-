# CGPA-Calculations- CGPA Answer Sheet

A CGPA calculator styled like an exam OMR sheet. Fill one bubble per course and your GPA and CGPA update instantly. Uses the Bangladesh 4.00 grading scale.

Features
Live semester GPA and cumulative CGPA, no calculate button
Previous CGPA and credits support for multi-semester totals
Quick input: paste courses as name credit grade, one per line
Save, list and delete semesters (stored in records.json)
Works on mobile; falls back to local calculation if the backend is off
Grade scale
Grade	Points	Grade	Points
A+	4.00	C+	2.50
A	3.75	C	2.25
A-	3.50	D	2.00
B+	3.25	F	0.00
B	3.00		
B-	2.75		
Project structure
cgpa-app/
├── package.json
├── server.js          # Express backend + API
├── README.md
└── public/
    └── index.html     # Frontend (HTML, CSS, JS)
Requirements
Node.js (LTS version)
Run in VS Code
Open the cgpa-app folder in VS Code (File, Open Folder).
Open the terminal (Ctrl + `).
Install dependencies:
npm install
Start the server:
npm start
Open http://localhost:3000 in your browser.

Press Ctrl + C in the terminal to stop the server.

How to use
Optional: enter Previous CGPA and Previous credits from earlier semesters.
Add courses with a name and credit, then click the grade bubble.
Or use Quick input, for example:
CSE365 3 A
CSE384 3 B+
CSE359 3 A-
Read your CGPA on the stamp. Press Save semester to keep it.
API
Method	Endpoint	Purpose
POST	/api/calculate	Calculate GPA and CGPA
GET	/api/records	List saved semesters
POST	/api/records	Save a semester
DELETE	/api/records/:id	Delete a saved semester

Example request to /api/calculate:

json
{
  "courses": [
    { "credit": 3, "grade": "A" },
    { "credit": 3, "grade": "B" }
  ],
  "prevCgpa": 3.5,
  "prevCredits": 30
}
Troubleshooting
npm is not recognized: restart VS Code after installing Node.js.
Port 3000 already in use: run set PORT=4000 && npm start (Windows) or PORT=4000 npm start (Mac/Linux), then open localhost:4000.
Page does not load: make sure index.html is inside the public/ folder.
Could not save: the backend is not running. Start it with npm start.
Formula
GPA  = sum(grade points x credit) / sum(credits)
CGPA = (semester points + previous CGPA x previous credits) / total credits
