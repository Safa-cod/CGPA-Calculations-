# 🎓 CGPA Answer Sheet 📝

✨ Fill the bubbles. Get your CGPA. Instantly. ✨

A CGPA calculator styled like an **exam OMR sheet** 🟣🔵

---

## 🌟 Features

- ⚡ Live GPA and CGPA, no calculate button
- 🔵 Fill one OMR bubble per course
- 📚 Previous CGPA and credits for multi-semester totals
- ⌨️ Quick input: paste `name credit grade` per line
- 💾 Save, view and delete semesters
- 📱 Works on phone and desktop
- 🛟 Falls back to local calculation if backend is off

---

## 🅰️ Grade Scale (4.00)

| Grade | Points | Grade | Points |
|:---:|:---:|:---:|:---:|
| 🟢 A+ | 4.00 | 🟡 C+ | 2.50 |
| 🟢 A | 3.75 | 🟡 C | 2.25 |
| 🟢 A- | 3.50 | 🟠 D | 2.00 |
| 🔵 B+ | 3.25 | 🔴 F | 0.00 |
| 🔵 B | 3.00 | | |
| 🔵 B- | 2.75 | | |

---

## 📁 Project Structure

```
cgpa-app/
├── package.json
├── server.js          (Express backend)
├── README.md
└── public/
    └── index.html     (Frontend)
```

---

## 🧰 Requirements

- 🟩 Node.js (LTS version) from nodejs.org
- 💻 VS Code (or any editor)

---

## 🚀 Run in VS Code

1. 📂 Open the `cgpa-app` folder in VS Code (File → Open Folder)
2. 🖱️ Open the terminal (Terminal → New Terminal)
3. 📥 Install dependencies:

```bash
npm install
```

4. ▶️ Start the server:

```bash
npm start
```

5. 🌍 Open http://localhost:3000 in your browser

🛑 Press Ctrl + C in the terminal to stop the server.

---

## 🎮 How to Use

1. 📚 (Optional) Enter Previous CGPA and Previous credits
2. ➕ Add courses with a name and credit, then click the grade bubble
3. ⌨️ Or use Quick input, one course per line:

```
CSE365 3 A
CSE384 3 B+
CSE359 3 A-
```

4. 🏆 Read your CGPA on the red stamp
5. 💾 Press Save semester to keep it

---

## 🧮 Formula

```
GPA  = sum(grade points x credit) / sum(credits)
CGPA = (semester points + previous CGPA x previous credits) / total credits
```

---

## 🛠️ Troubleshooting

| 😵 Problem | 💡 Fix |
|---|---|
| npm is not recognized | Restart VS Code after installing Node.js |
| Port 3000 already in use | Run `set PORT=4000 && npm start` (Windows) or `PORT=4000 npm start` (Mac/Linux), then open localhost:4000 |
| Page does not load | Make sure index.html is inside the public folder |
| Could not save | Backend is off. Run `npm start` |

---

🎉 Good luck with your results! 🎉
