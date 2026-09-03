# Forge Fitness — Premium Gym Website Demo

Sales demo for a custom gym website + lead-generation package.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Replace gym content

Edit `src/data/site.ts` for name, logo, address, phone, prices, trainers, programs, gallery and stats.

Admin sample records live in `src/data/admin.ts`.  
Chat replies live in `src/data/chatbot.ts` (frontend demo only — swap `getForgeReply` for an API later).

## Key routes

- `/` public website
- `/trial` free-trial lead form
- `/admin-demo` operations dashboard preview

The trial form does not send data. Success is simulated so you can show the booking flow and dashboard connection.
