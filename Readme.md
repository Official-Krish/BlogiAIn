<a name="readme-top"></a>
<br />
<div align="center">
<a href="https://github.com/Official-Krish/Blog-Website">
    <img src="frontend/public/logo.png" alt="Logo">
  </a>
  

  <h2 align="center">FiguringoutLife</h2>

  <p align="center">
    A Fullstack blog Website with Generative AI!
    <br />
    <a href="https://github.com/Official-Krish/Blog-Website"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://blog-website-krish-anands-projects.vercel.app/">View App</a>

  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project



A React frontend and Cloudflare workers backend application offering features that replicate Medium, the popular blogging platform. 

Features:
* Token based Authentication
* Create, Read, Update, Delete Blogs
* Bookmark, Like, Search, Filter Blogs
* Generate Blog using AI
* Autosave
* User profiles

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies & Libraries

- **React** for the frontend.
- **Cloudflare Workers** for the serverless backend.
- **Zod** for validation library and TypeScript type inference.
- **TypeScript** as the main programming language.
- **Prisma** with connection pooling as the ORM.
- **Postgres** as the database.
- **JSON Web Tokens (JWT)** for authentication.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Structure

- Backend: Contains server-side code and logic.
- Common: Shared assets and modules used by frontend and backend. (NPM Library)
- Frontend: Contains client-side code and logic.


## Local Setup

#### Backend

- Navigate into the backend directory 
```bash
cd backend
```
- Create a copy of .env.example and name the file `.env`
- Set up Postgres DATABASE_URL in .env file. You can get a free PostgreSQL connection string from [Aiven.io](https://aiven.io/).
- Set up Prisma connection pool DATABASE_URL in wrangler.toml file. You can get this for free from [Prisma](https://www.prisma.io/data-platform/accelerate).
- Set up JWT Secret JWT_SECRET in wrangler.toml file. This can be any value.
- Install dependencies using 
```bash 
npm install
```
- DB Migration (This will create the DB Schema)
```bash
npm run prisma:migrate
```
- Run the application locally using 
```bash
npm run dev
```

> Note: wrangler.toml is the environment configuration file for a serverless backend. .env is used by Prisma for connection pooling. Ensure you configure both environment files accordingly.

#### Frontend

- Navigate into the frontend directory using 
```bash
cd frontend
```
- Install dependencies using 
```bash
npm install
```
- Run the application locally using 
```bash
npm run dev
```

> Note: `frontend/src/config.ts` contains `backend-url`. If you need your frontend to point to local backend server, uncomment `export const BACKEND_URL = "http://localhost:8787"`. 

#### AI based Article content generation

- set `FF_ENABLE_AI` = true in config.ts
- set `OPENAI_API_KEY` in wrangler.toml file in the backend.
- The feature is enabled only when title is atleast 10 characters long.


## Contributing

We welcome contributions from the community! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/[feature-title]`).
3. Make your changes and commit them (`git commit -am 'Add brief meaningful commit message'`).
4. Push to the branch (`git push origin feature/[feature-title]`).
5. Create a new Pull Request.

For major changes, please open an issue first to discuss what you would like to change.


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Krish Anand - krishanand974@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>





