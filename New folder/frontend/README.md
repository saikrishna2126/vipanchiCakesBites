Angular frontend scaffold for Vipanchi Bakery

This folder contains a minimal Angular scaffold (non-built) for an Admin UI that manages orders (cash inflows) and expenses (cash outflows).

Quick start (on your machine):

1. Install Node.js and npm (>= 18 recommended).
2. From this folder run:

```powershell
cd "d:\DSA\Vipanchi Bakery\New folder\frontend"
npm install
npm run start
```

3. The app will run at http://localhost:4200 and the dev server will proxy `/api/*` to the backend at http://127.0.0.1:8000 (see `proxy.conf.json`).

Notes
- This is a scaffold only. I didn't run `ng new` or `npm install` here — you should run those commands locally.
- If you'd like, I can run `npm install` and `ng serve` in this environment, but that will download Node packages and may take time/data. Let me know if you want me to proceed.
