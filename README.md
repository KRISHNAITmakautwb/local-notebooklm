# Local NoteBookLM (de.ci.phe.red Lab)

A private, self-hosted NotebookLM implementation orchestrated with SurrealDB, FastAPI backend, background workers, and Next.js frontend.

## Architecture

- **Database**: SurrealDB (port 8000)
- **Backend API**: FastAPI / Python backend (`open-notebook/`) via `uv` (port 5055)
- **Worker**: Asynchronous commands worker processing background tasks
- **Frontend**: Next.js 15 UI with custom branding and styling (`open-notebook/frontend/`) (port 8502)
- **Process Manager**: PM2 via `ecosystem.config.js`

## Setup & Running

### 1. Prerequisites
- Node.js & npm
- Python 3.12+ / `uv`
- SurrealDB binary (`./surreal`)

### 2. Start Services with PM2
```bash
pm2 start ecosystem.config.js
```

### 3. Service Management
```bash
pm2 status
pm2 logs
pm2 stop all
pm2 restart all
```
