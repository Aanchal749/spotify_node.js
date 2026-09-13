# 🎵 Spotify Clone - Node.js Backend

This project is a backend clone of Spotify built with Node.js, Express and MongoDB.

I built this to learn advanced backend concepts.

## 🚀 What I Learned

- **Express.js** - Routing, Middleware, Route handling
- **MongoDB & Mongoose** - Schemas, Models, Relationships
- **Authentication** - JWT, Cookies, bcryptjs for password hashing
- **Error Handling** - `argument handler must be a function` (Router fixes)
- **MVC Architecture** - Controllers, Routes, Models separation
- **Git & GitHub** - .gitignore, pushing code, handling large node_modules
- **Env Variables** - dotenv, JWT_SECRET, MongoDB connection

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- cookie-parser
- dotenv
- nodemon

## 📁 Folder Structure
## 📌 Miscellaneous Learnings

### Git Commands I Learned
- `git init` - Initialize repo
- `git remote add origin <url>` - Add remote
- `git remote remove origin` - Remove wrong remote
- `git branch -M main` - Rename branch to main
- `git rm -r --cached node_modules` - Remove cached large folder
- `git add .` / `git commit -m "msg"` / `git push -u origin main`

### Common Errors & Solutions
- **node_modules too large** -> Always add `.gitignore` with `node_modules/` and `.env`
- **Repository not found** -> Create repo on GitHub website first at github.com/new
- **remote origin already exists** -> Use `git remote remove origin` then add again
- **Dotenv tip** -> `◇ injected env (5) from .env` means .env loaded successfully

### Best Practices I Followed
- Never push `.env` file (contains secrets)
- Never push `node_modules` (install with `npm install`)
- Use MVC pattern for clean code
- Use `bcryptjs` instead of `bcrypt` for Windows compatibility
- Always check `console.log(exports)` when `handler must be a function` error comes

### Next Improvements
- [ ] Add song upload functionality
- [ ] Add playlist routes
- [ ] Add middleware for auth verification
- [ ] Add validation with zod/joi
- [ ] Add error handling middleware

### Folder Naming Confusion I Solved
- `bank_trancation_backend` vs `spotify` - Keep separate projects in separate folders
- `auth.controller.js` vs `auth.controllers.js` - Keep one file, consistent naming

---
**Total Time Invested:** Learning Phase 🚀
**Status:** Still Learning & Building
