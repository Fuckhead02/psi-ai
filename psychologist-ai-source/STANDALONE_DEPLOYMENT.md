# Standalone Psychologist AI Chatbot - Complete Deployment Guide

This is a **fully independent application** that works without Manus or any proprietary services.

## 🎯 What You Get

- ✅ **Complete React + Node.js application**
- ✅ **MySQL database support**
- ✅ **OpenAI API integration** (GPT-4 for AI responses)
- ✅ **Multi-language support** (EN, RU, ES, FR)
- ✅ **Three AI personas** (Stoic Philosopher, Caring Mom, Bold Coach)
- ✅ **Chat modes** (Be near, Deep dive, Outside view, Blind spots, Only question)
- ✅ **Dark glassmorphism design**
- ✅ **Fully responsive**

---

## 📋 Prerequisites

Before deploying, you need:

1. **Node.js 18+** - Download from https://nodejs.org/
2. **MySQL 8.0+** - Download from https://www.mysql.com/downloads/
3. **npm or pnpm** - Comes with Node.js
4. **OpenAI API Key** - Get from https://platform.openai.com/api-keys
5. **A server or hosting provider** (Railway, Render, Heroku, DigitalOcean, etc.)

---

## 🚀 Local Development Setup

### Step 1: Install Dependencies

```bash
cd psychologist-ai-standalone
npm install
# or
pnpm install
```

### Step 2: Set Up Database

1. **Start MySQL:**
   ```bash
   # On Mac:
   mysql.server start
   
   # On Windows:
   # Use MySQL Workbench or run: mysqld
   
   # On Linux:
   sudo systemctl start mysql
   ```

2. **Create database:**
   ```bash
   mysql -u root -p
   # Enter your MySQL password
   
   # In MySQL console:
   CREATE DATABASE psychologist_db;
   EXIT;
   ```

3. **Run migrations:**
   ```bash
   npm run db:push
   ```

### Step 3: Configure Environment

1. **Create `.env` file** in the root directory
2. **Copy this content and fill in your values:**

```
DATABASE_URL=mysql://root:your_password@localhost:3306/psychologist_db
OPENAI_API_KEY=sk-your-openai-api-key-here
OPENAI_MODEL=gpt-4
NODE_ENV=development
PORT=3000
JWT_SECRET=your-random-secret-key-here
VITE_APP_TITLE=🌙 Your Psychologist
VITE_APP_LOGO=🌙
```

3. **Replace values:**
   - `your_password` - Your MySQL password
   - `sk-your-openai-api-key-here` - Your OpenAI API key
   - `your-random-secret-key-here` - Any random string

### Step 4: Start Development Server

```bash
npm run dev
```

Your app will be available at: `http://localhost:3000`

---

## 🌐 Production Deployment

### Option 1: Railway.app (Recommended)

1. **Create GitHub repository** with your code
2. **Go to Railway.app** - https://railway.app/
3. **Connect your GitHub repository**
4. **Add MySQL plugin**
5. **Set environment variables** (see ENV_SETUP.md)
6. **Deploy!**

### Option 2: Render.com

1. **Create GitHub repository**
2. **Go to Render.com** - https://render.com/
3. **Create new Web Service**
4. **Connect GitHub repository**
5. **Set environment variables**
6. **Add MySQL database**
7. **Deploy!**

### Option 3: DigitalOcean

1. **Create a Droplet** (Ubuntu 22.04)
2. **SSH into your server**
3. **Install Node.js and MySQL:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs mysql-server
   ```
4. **Clone your repository:**
   ```bash
   git clone https://github.com/your-username/psychologist-ai.git
   cd psychologist-ai
   ```
5. **Install dependencies:**
   ```bash
   npm install
   ```
6. **Set up environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   nano .env
   ```
7. **Build and start:**
   ```bash
   npm run build
   npm start
   ```
8. **Use PM2 to keep it running:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "psychologist-ai" -- start
   pm2 startup
   pm2 save
   ```

### Option 4: Heroku

1. **Install Heroku CLI** - https://devcenter.heroku.com/articles/heroku-cli
2. **Login to Heroku:**
   ```bash
   heroku login
   ```
3. **Create app:**
   ```bash
   heroku create your-app-name
   ```
4. **Add MySQL add-on:**
   ```bash
   heroku addons:create cleardb:ignite
   ```
5. **Set environment variables:**
   ```bash
   heroku config:set OPENAI_API_KEY=sk-your-key
   heroku config:set JWT_SECRET=your-secret
   ```
6. **Deploy:**
   ```bash
   git push heroku main
   ```

---

## 📊 Project Structure

```
psychologist-ai-standalone/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   ├── App.tsx        # Main app component
│   │   └── index.css      # Global styles
│   └── index.html
├── server/                # Node.js backend
│   ├── routers.ts         # tRPC procedures
│   ├── personas.ts        # AI persona prompts
│   ├── db.ts              # Database queries
│   └── _core/             # Core server logic
├── shared/                # Shared code
│   ├── translations.ts    # Multi-language support
│   └── types.ts           # TypeScript types
├── drizzle/               # Database schema
│   └── schema.ts          # Table definitions
├── package.json           # Dependencies
├── vite.config.ts         # Frontend build config
├── tsconfig.json          # TypeScript config
└── ENV_SETUP.md           # Environment guide
```

---

## 🔧 Key Files to Customize

### 1. Persona System Prompts
**File:** `server/personas.ts`

Edit the system prompts for each persona:
```typescript
const PERSONAS = {
  stoic: {
    name: "Stoic Philosopher",
    systemPrompt: "You are a calm, philosophical guide..."
  },
  // ... more personas
}
```

### 2. Translations
**File:** `shared/translations.ts`

Add or modify translations for different languages.

### 3. Chat Modes
**File:** `server/personas.ts`

Customize how each chat mode affects AI responses.

### 4. UI Styling
**File:** `client/src/index.css`

Modify colors, fonts, and layout using Tailwind CSS.

---

## 🧪 Testing

### Run Tests
```bash
npm run test
```

### Check TypeScript
```bash
npm run check
```

### Format Code
```bash
npm run format
```

---

## 📈 Performance Tips

1. **Enable caching:**
   ```bash
   npm install redis
   ```

2. **Use CDN for static files:**
   - Upload images to S3 or Cloudflare
   - Reference them in code

3. **Optimize database:**
   - Add indexes to frequently queried columns
   - Use connection pooling

4. **Monitor performance:**
   - Use New Relic or Datadog
   - Set up error tracking with Sentry

---

## 🔒 Security Checklist

- [ ] Change `JWT_SECRET` to a strong random string
- [ ] Use HTTPS in production
- [ ] Enable CORS properly
- [ ] Validate all user inputs
- [ ] Use environment variables for secrets
- [ ] Keep dependencies updated: `npm audit fix`
- [ ] Set up rate limiting
- [ ] Enable database backups

---

## 🆘 Troubleshooting

### Database Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:3306
```
**Solution:** Make sure MySQL is running and DATABASE_URL is correct.

### OpenAI API Error
```
Error: 401 Unauthorized
```
**Solution:** Check your OPENAI_API_KEY is correct and has credits.

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::3000
```
**Solution:** Change PORT in .env or kill the process using port 3000.

### Build Fails
**Solution:** 
- Delete `node_modules` and `pnpm-lock.yaml`
- Run `npm install` again
- Check for TypeScript errors: `npm run check`

---

## 📞 Support Resources

- **Node.js Docs:** https://nodejs.org/docs/
- **React Docs:** https://react.dev/
- **Express Docs:** https://expressjs.com/
- **MySQL Docs:** https://dev.mysql.com/doc/
- **OpenAI API:** https://platform.openai.com/docs/
- **tRPC Docs:** https://trpc.io/

---

## 🎉 You're Ready!

Your Psychologist AI Chatbot is now fully independent and ready to deploy anywhere.

**Next Steps:**
1. Set up your environment variables
2. Test locally
3. Deploy to your chosen hosting provider
4. Share with users!

Good luck! 🚀
