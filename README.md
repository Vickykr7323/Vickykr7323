# AI-Powered Futuristic Developer Portfolio

A production-ready Next.js + TypeScript portfolio with cinematic UI, multi-theme system, animated sections, and AI-powered resume-to-portfolio generation.

## Highlights
- Futuristic glassmorphism + neon aesthetic with animated hero and dynamic cards.
- Resume analyzer upload flow (`PDF/DOCX/TXT/Image` accepted) with auto-filled profile sections.
- AI insights panel (career suggestions, missing skills, portfolio recommendations).
- Dynamic sections: Skills, Experience, Projects, Certifications, Achievements.
- Multi-theme switcher (Cyberpunk, White, Galaxy, Matrix, Hacker, etc.).
- API routes for resume analysis and chatbot assistant.
- Optional standalone Express server.

## Stack
- Next.js 15, React 19, TypeScript
- Tailwind CSS, Framer Motion
- Three.js / React Three Fiber ready dependencies
- OpenAI SDK ready integration

## Run
```bash
npm install
npm run dev
```

Open http://localhost:3000

## APIs
- `POST /api/analyze-resume` (multipart `resume`)
- `POST /api/chat` (`{ message: string }`)

## Optional Node API server
```bash
npm run server
```

## Notes
The project is structured for modular expansion (3D scenes, GSAP timelines, voice assistant, and advanced parser pipeline).
