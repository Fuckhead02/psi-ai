# Complete Railway.app Deployment Instructions

## Your GitHub Username: Fuckhead02
## Your Email: mi.emaehf@gmail.com

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `psychologist-ai`
3. Description: "Psychologist AI Chatbot - Multi-language AI-powered chatbot"
4. Make it **Public** (so Railway can access it)
5. Click "Create repository"

### Step 2: Upload Code to GitHub

You have two options:

**Option A: Using Git Command Line**
```bash
cd /home/ubuntu/psychologist-ai
git init
git add .
git commit -m "Initial commit: Psychologist AI Chatbot with Qwen AI"
git branch -M main
git remote add origin https://github.com/Fuckhead02/psychologist-ai.git
git push -u origin main
```

**Option B: Using GitHub Web Interface**
1. Go to your new repository
2. Click "Add file" → "Upload files"
3. Drag and drop all files from `/home/ubuntu/psychologist-ai`
4. Commit changes

### Step 3: Deploy to Railway

1. Go to: https://railway.app/
2. Click "Login" → "Login with GitHub"
3. Authorize Railway to access your GitHub account
4. Click "New Project" → "Deploy from GitHub repo"
5. Select: `Fuckhead02/psychologist-ai`
6. Railway will automatically detect it's a Node.js project

### Step 4: Add MySQL Database

1. In Railway dashboard, click "Add Plugin"
2. Select "MySQL"
3. Railway automatically creates the database and sets `DATABASE_URL`

### Step 5: Configure Environment Variables

In Railway dashboard, go to "Variables" and add:

```
JWT_SECRET=your-random-secret-key-here
VITE_APP_ID=manus-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im
OWNER_OPEN_ID=owner-id
OWNER_NAME=Psychologist
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your-api-key
VITE_FRONTEND_FORGE_API_KEY=your-frontend-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_ANALYTICS_ENDPOINT=https://analytics.manus.im
VITE_ANALYTICS_WEBSITE_ID=website-id
VITE_APP_TITLE=🌙 Your Psychologist
VITE_APP_LOGO=🌙
NODE_ENV=production
```

**Note:** `DATABASE_URL` will be automatically set by the MySQL plugin.

### Step 6: Deploy

1. Click the "Deploy" button
2. Wait for the build to complete (2-5 minutes)
3. Your app will be live at a Railway URL (e.g., `https://psychologist-ai-production.up.railway.app`)

---

## 📋 What's Included in Your App

✅ **Three AI Personas** powered by Qwen AI
- Stoic Philosopher
- Caring Mom
- Bold Coach

✅ **Multi-Language Support**
- English, Russian, Spanish, French

✅ **Chat Features**
- Real-time AI responses
- Chat modes (Be near, Deep dive, Outside view, Blind spots, Only question)
- Conversation history
- Typing indicators

✅ **Design**
- Dark gradient glassmorphism
- Responsive layout
- Professional UI

---

## 🔑 Important Notes

1. **Database**: Railway's MySQL plugin automatically handles database setup
2. **Build**: Railway automatically runs `pnpm build`
3. **Start**: Railway automatically runs `npm start`
4. **Logs**: Check Railway dashboard for deployment logs
5. **Custom Domain**: Add your own domain in Railway Settings (optional)

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] App loads at Railway URL
- [ ] Can select a persona (Stoic Philosopher, Caring Mom, Bold Coach)
- [ ] Can switch languages (EN, RU, ES, FR)
- [ ] Can send a message and receive AI response
- [ ] Typing indicator appears while AI responds
- [ ] Chat history is saved

---

## 🆘 Troubleshooting

**Build fails:**
- Check Railway logs for errors
- Verify all files were uploaded to GitHub
- Ensure `package.json` is in the root directory

**App crashes after deploy:**
- Check environment variables are set correctly
- Verify DATABASE_URL is present
- Check Railway logs for error messages

**Database connection fails:**
- Wait 30 seconds after MySQL plugin is added
- Verify DATABASE_URL environment variable exists
- Check MySQL plugin status in Railway dashboard

**Can't access app:**
- Wait 2-3 minutes for deployment to complete
- Check Railway deployment status
- Verify your GitHub repository is public

---

## 📞 Support

- **Railway Support**: https://railway.app/support
- **Railway Docs**: https://docs.railway.app/
- **GitHub Issues**: Create an issue in your repository

---

## 🎉 You're All Set!

Your Psychologist AI Chatbot will be live on Railway.app once deployment completes. The app is fully functional and ready for users in Russia and worldwide!

**Deployment typically takes 2-5 minutes.**

Good luck! 🚀
