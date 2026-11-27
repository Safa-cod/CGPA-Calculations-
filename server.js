const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const DB = path.join(__dirname, 'records.json');
const SCALE = { 'A+': 4, 'A': 3.75, 'A-': 3.5, 'B+': 3.25, 'B': 3, 'B-': 2.75, 'C+': 2.5, 'C': 2.25, 'D': 2, 'F': 0 };

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const read = () => { try { return JSON.parse(fs.readFileSync(DB, 'utf8')); } catch { return []; } };
const write = (d) => fs.writeFileSync(DB, JSON.stringify(d, null, 2));

function calculate({ courses = [], prevCgpa = 0, prevCredits = 0 }) {
  let points = 0, credits = 0;
  for (const c of courses) {
    const cr = Number(c.credit);
    if (!(c.grade in SCALE) || !(cr > 0)) continue;
    points += SCALE[c.grade] * cr;
    credits += cr;
  }
  const pc = Number(prevCredits) > 0 ? Number(prevCredits) : 0;
  const pg = pc ? Number(prevCgpa) || 0 : 0;
  const totalCredits = credits + pc;
  return {
    gpa: credits ? points / credits : 0,
    cgpa: totalCredits ? (points + pg * pc) / totalCredits : 0,
    credits, totalCredits
  };
}

app.post('/api/calculate', (req, res) => res.json(calculate(req.body || {})));

app.get('/api/records', (_req, res) => res.json(read()));

app.post('/api/records', (req, res) => {
  const { label, courses, prevCgpa, prevCredits } = req.body || {};
  if (!Array.isArray(courses) || !courses.length) return res.status(400).json({ error: 'Add at least one course.' });
  const rec = { id: Date.now(), label: (label || 'Untitled semester').slice(0, 40), courses, prevCgpa, prevCredits, result: calculate(req.body) };
  const all = read(); all.unshift(rec); write(all);
  res.status(201).json(rec);
});

app.delete('/api/records/:id', (req, res) => {
  write(read().filter(r => String(r.id) !== req.params.id));
  res.status(204).end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`CGPA app running at http://localhost:${PORT}`));
