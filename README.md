🎓 CGPA Answer Sheet 📝
✨ Fill the bubbles. Get your CGPA. Instantly. ✨

A CGPA calculator styled like an exam OMR sheet 🟣🔵

</div>
🌟 Features
	Feature
⚡	Live GPA and CGPA, no calculate button
🔵	Fill one OMR bubble per course
📚	Previous CGPA and credits for multi-semester totals
⌨️	Quick input: paste name credit grade per line
💾	Save, view and delete semesters
📱	Works on phone and desktop
🛟	Falls back to local calculation if backend is off
🅰️ Grade Scale (4.00)
🏅 Grade	🎯 Points	🏅 Grade	🎯 Points
🟢 A+	4.00	🟡 C+	2.50
🟢 A	3.75	🟡 C	2.25
🟢 A-	3.50	🟠 D	2.00
🔵 B+	3.25	🔴 F	0.00
🔵 B	3.00		
🔵 B-	2.75		
📁 Project Structure
🗂️ cgpa-app/
├── 📦 package.json
├── 🖥️ server.js          # Express backend + API
├── 📖 README.md
└── 🌐 public/
    └── 🎨 index.html     # Frontend (HTML, CSS, JS)
🧰 Requirements
🟩 Node.js (LTS version)
💻 VS Code (or any editor)
🚀 Run in VS Code
📂 Open the cgpa-app folder in VS Code (File → Open Folder)
🖱️ Open the terminal with `Ctrl + ``
📥 Install dependencies:
bash
npm install
▶️ Start the server:
bash
npm start
🌍 Open http://localhost:3000 in your browser

🛑 Press Ctrl + C in the terminal to stop the server.

🎮 How to Use
📚 (Optional) Enter Previous CGPA and Previous credits
➕ Add courses with a name and credit, then click the grade bubble 🔵
⌨️ Or use Quick input:
CSE365 3 A
CSE384 3 B+
CSE359 3 A-
🏆 Read your CGPA on the red stamp
💾 Press Save semester to keep it
🔌 API
🧩 Method	🔗 Endpoint	📌 Purpose
🟢 POST	/api/calculate	Calculate GPA and CGPA
🔵 GET	/api/records	List saved semesters
🟢 POST	/api/records	Save a semester
🔴 DELETE	/api/records/:id	Delete a saved semester
<details> <summary>📨 Example request to <code>/api/calculate</code></summary>
json
{
  "courses": [
    { "credit": 3, "grade": "A" },
    { "credit": 3, "grade": "B" }
  ],
  "prevCgpa": 3.5,
  "prevCredits": 30
}
</details>
🧮 Formula
GPA  = Σ(grade points × credit) / Σ(credits)
CGPA = (semester points + previous CGPA × previous credits) / total credits
🛠️ Troubleshooting
😵 Problem	💡 Fix
npm is not recognized	Restart VS Code after installing Node.js
Port 3000 already in use	set PORT=4000 && npm start (Windows) or PORT=4000 npm start (Mac/Linux), then open localhost:4000
Page does not load	Make sure index.html is inside the public/ folder
Could not save	Backend is off. Run npm start
<div align="center">
🎉 Good luck with your results! 🎉

Made with ❤️ and a lot of ☕

</div>
