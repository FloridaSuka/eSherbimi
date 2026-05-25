# SSH Gr18 Electronic Services Platform

Professional client-server project for **Sistemet e Shperndara 2025/26**.

## Architecture

- `backend/`: Express REST API, Sequelize ORM, JWT authentication, role-based authorization, tenant isolation, Swagger UI, Redis-compatible caching, background jobs and OpenAI integration.
- `frontend/`: React + Context API client that communicates only through HTTP API calls.
- `docs/`: architecture, API, operations, project-management and collaboration documentation.
- `.github/`: CI pipeline, pull request template, issue templates and CODEOWNERS.

The old project files are left in place for history, but the new maintained implementation is in `backend/` and `frontend/`.

## Quick Start

```bash
npm install --workspaces
cp backend/.env.example backend/.env
docker compose up -d redis
HOST=127.0.0.1 PORT=5001 npm --workspace backend start
VITE_API_URL=http://127.0.0.1:5001/api npm --workspace frontend run dev
```

Backend: `http://127.0.0.1:5001`  
Swagger UI: `http://127.0.0.1:5001/api-docs`  
Frontend: `http://127.0.0.1:5176`

## Tests

```bash
npm --workspace backend test
npm --workspace frontend run build
```

## Requirements Coverage

1. Independent client/server: `frontend/` and `backend/`.
2. HTTP/HTTPS REST communication: all frontend calls go to `/api`.
3. Minimum 20 endpoints: generated service routes expose 110 service endpoints plus auth, AI and system endpoints.
4. REST framework: Express.
5. OOP: service/controller classes.
6. Swagger: `/api-docs`.
7. ORM/database: Sequelize with SQLite by default.
8. Auth/authorization: JWT login/register and roles `admin`, `manager`, `citizen`.
9. Middleware: logging, auth, rate limit, CORS, Helmet.
10. React + Context: `frontend/src/context/AuthContext.jsx`.
11. Tests + CI/CD: Jest/Supertest tests and GitHub Actions.
12. Minimum 20 models/migrations: 25 migration files and 25 Sequelize models.
13. Documentation: `docs/`.
14. Project management: `docs/PROJECT_MANAGEMENT.md`.
15. Git collaboration: CI, PR template, issue templates, CODEOWNERS and documented code-review workflow.
16. OpenAI integration: `/api/ai/chat`, `/api/ai/analyze`, configurable through `OPENAI_API_KEY`.
17. Caching: Redis via Docker Compose and `REDIS_URL`, memory fallback.
18. Background jobs: AI requests are queued.
19. Multi-tenancy: every user and service record is scoped by `tenantId`.
20. Search/filtering: `q`, `status`, `limit`, `offset` on service APIs.
