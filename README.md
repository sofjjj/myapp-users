# @myapp/users

Users microservice for the myapp platform.

## Endpoints

| Method | Path      | Description        |
|--------|-----------|--------------------|
| GET    | /healthz  | Health check       |

## Development

```bash
npm install
npm run dev       # ts-node
npm run build     # compile to dist/
npm start         # run compiled
npm test          # jest
```

## Environment

| Variable | Default               | Description       |
|----------|-----------------------|-------------------|
| PORT     | 3001                  | Listening port    |

## Health check response

```json
{ "status": "ok", "service": "users", "timestamp": "..." }
```
