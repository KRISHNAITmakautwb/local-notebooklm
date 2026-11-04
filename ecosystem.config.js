module.exports = {
  apps: [
    {
      name: "surrealdb",
      cwd: "/home/crypto_nn/local-notebooklm",
      script: "./surreal",
      args: "start --log info --user root --pass root file:mydatabase.db --bind 0.0.0.0:8000",
      interpreter: "none",
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      out_file: "/home/crypto_nn/local-notebooklm/surreal-out.log",
      error_file: "/home/crypto_nn/local-notebooklm/surreal-error.log"
    },
    {
      name: "open-notebook-api",
      cwd: "/home/crypto_nn/local-notebooklm/open-notebook",
      script: "/home/crypto_nn/miniconda3/bin/uv",
      args: "run --env-file .env run_api.py",
      interpreter: "none",
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      out_file: "/home/crypto_nn/local-notebooklm/api-out.log",
      error_file: "/home/crypto_nn/local-notebooklm/api-error.log",
      env: {
        PYTHONUNBUFFERED: "1"
      }
    },
    {
      name: "open-notebook-worker",
      cwd: "/home/crypto_nn/local-notebooklm/open-notebook",
      script: "/home/crypto_nn/miniconda3/bin/uv",
      args: "run --env-file .env surreal-commands-worker --import-modules commands",
      interpreter: "none",
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      out_file: "/home/crypto_nn/local-notebooklm/worker-out.log",
      error_file: "/home/crypto_nn/local-notebooklm/worker-error.log",
      env: {
        PYTHONUNBUFFERED: "1"
      }
    },
    {
      name: "open-notebook-frontend",
      cwd: "/home/crypto_nn/local-notebooklm/open-notebook/frontend",
      script: "npm",
      args: "start",
      interpreter: "none",
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      out_file: "/home/crypto_nn/local-notebooklm/frontend-out.log",
      error_file: "/home/crypto_nn/local-notebooklm/frontend-error.log",
      env: {
        PORT: "8502"
      }
    }
  ]
};
