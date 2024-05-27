# Blogging App

A React frontend and Cloudflare workers backend application offering features that replicate Medium, the popular blogging platform.

## Important links
- **[Application link](https://blog-website-krish-anands-projects.vercel.app/)**


## 🛠 Technologies & Libraries
- **React** for the frontend.
- **Cloudflare Workers** for the serverless backend.
- **Zod** for validation library and TypeScript type inference.
- **TypeScript** as the main programming language.
- **Prisma** with connection pooling as the ORM.
- **Postgres** as the database.
- **JSON Web Tokens (JWT)** for authentication.

## 📁 Project Structure
- **Backend:** Contains server-side code and logic.
- **Common:** Shared assets and modules used by frontend and backend. (NPM Library)
- **Frontend:** Contains client-side code and logic.

## 💻 Local Setup
### Backend
1. Navigate into the backend directory
    ```sh
    cd backend
    ```
2. Create a copy of `.env.example` and name the file `.env`
3. Set up Postgres `DATABASE_URL` in `.env` file. You can get a free PostgreSQL connection string from Aiven.io.
4. Set up Prisma connection pool `DATABASE_URL` in `wrangler.toml` file. You can get this for free from Prisma.
5. Set up JWT Secret `JWT_SECRET` in `wrangler.toml` file. This can be any value.
6. Install dependencies using
    ```sh
    npm install
    ```
7. Run the application locally using
    ```sh
    npm run dev
    ```
    Note: `wrangler.toml` is the environment configuration file for a serverless backend. `.env` is used by Prisma for connection pooling. Ensure you configure both environment files accordingly.

### Frontend
1. Navigate into the frontend directory using
    ```sh
    cd frontend
    ```
2. Install dependencies using
    ```sh
    npm install
    ```
3. Run the application locally using
    ```sh
    npm run dev
    ```
    Note: `frontend/src/config.ts` contains `BACKEND_URL`. If you need your frontend to point to local backend server, uncomment 
    ```ts
    export const BACKEND_URL = "http://localhost:8787";
    ```



## Contributing
We welcome contributions from the community! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch
    ```sh
    git checkout -b feature/[feature-title]
    ```
3. Make your changes and commit them
    ```sh
    git commit -am 'Add brief meaningful commit message'
    ```
4. Push to the branch
    ```sh
    git push origin feature/[feature-title]
    ```
5. Create a new Pull Request.
