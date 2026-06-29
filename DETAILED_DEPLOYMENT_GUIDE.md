# 🚀 Detailed Railway.app Deployment Guide

## Your Information
- **GitHub Username:** Fuckhead02
- **Email:** mi.emaehf@gmail.com
- **Project:** Psychologist AI Chatbot

---

## STEP 1: Create a GitHub Repository

### What is GitHub?
GitHub is a platform where you store your code online. Railway will pull your code from GitHub to deploy it.

### Detailed Instructions:

1. **Open your browser and go to:** https://github.com/

2. **If you're not logged in:**
   - Click "Sign in" (top right)
   - Enter your GitHub username: `Fuckhead02`
   - Enter your password
   - Click "Sign in"

3. **Create a new repository:**
   - Click the **"+"** icon (top right corner)
   - Select **"New repository"**

4. **Fill in the repository details:**
   - **Repository name:** `psychologist-ai`
   - **Description:** `Psychologist AI Chatbot - Multi-language AI-powered chatbot with Qwen AI`
   - **Visibility:** Select **"Public"** (important! Railway needs to access it)
   - **Initialize this repository with:**
     - ☑ Add a README file
     - ☑ Add .gitignore (select "Node")
   - Click **"Create repository"**

5. **You now have an empty GitHub repository!**

---

## STEP 2: Upload Your Code to GitHub

You have **two options**. Choose the one that's easiest for you:

### OPTION A: Using Command Line (Recommended for developers)

**Prerequisites:** You need Git installed on your computer
- Download Git: https://git-scm.com/download

**Steps:**

1. **Open Terminal/Command Prompt** on your computer

2. **Navigate to your project folder:**
   ```bash
   cd /home/ubuntu/psychologist-ai
   ```

3. **Initialize Git (if not already done):**
   ```bash
   git init
   ```

4. **Add all files:**
   ```bash
   git add .
   ```

5. **Create your first commit:**
   ```bash
   git commit -m "Initial commit: Psychologist AI Chatbot with Qwen AI integration"
   ```

6. **Rename branch to main (if needed):**
   ```bash
   git branch -M main
   ```

7. **Add your GitHub repository as remote:**
   ```bash
   git remote add origin https://github.com/Fuckhead02/psychologist-ai.git
   ```

8. **Push your code to GitHub:**
   ```bash
   git push -u origin main
   ```

9. **Enter your GitHub credentials when prompted**

**Done!** Your code is now on GitHub.

---

### OPTION B: Using GitHub Web Interface (Easiest - No command line needed)

1. **Go to your repository:**
   - https://github.com/Fuckhead02/psychologist-ai

2. **Click "Add file"** (green button, top right)

3. **Select "Upload files"**

4. **Drag and drop all files from your project:**
   - You can drag the entire `/home/ubuntu/psychologist-ai` folder
   - Or select individual files

5. **After uploading, scroll down and click "Commit changes"**

6. **In the commit message, type:**
   ```
   Initial commit: Psychologist AI Chatbot with Qwen AI
   ```

7. **Click "Commit changes"**

**Done!** Your code is now on GitHub.

---

## STEP 3: Create Railway.app Account

### What is Railway?
Railway is a hosting platform that runs your Node.js application 24/7 on their servers.

### Detailed Instructions:

1. **Go to Railway.app:** https://railway.app/

2. **Click "Login"** (top right)

3. **Select "Login with GitHub"**

4. **You'll be redirected to GitHub to authorize Railway:**
   - Click "Authorize Railway"
   - Enter your GitHub password if prompted

5. **You're now logged into Railway!**

---

## STEP 4: Create a New Project in Railway

1. **In Railway dashboard, click "New Project"** (top right)

2. **Select "Deploy from GitHub repo"**

3. **You'll see a list of your GitHub repositories**

4. **Find and click "psychologist-ai"**

5. **Railway will automatically:**
   - Detect it's a Node.js project
   - Start building your application
   - This takes 2-5 minutes

---

## STEP 5: Add MySQL Database

Your chatbot needs a database to store chat conversations.

### Detailed Instructions:

1. **In your Railway project dashboard, look for "Add Plugin"** (or "Add Service")

2. **Click "Add Plugin"**

3. **Search for and select "MySQL"**

4. **Railway will:**
   - Create a MySQL database
   - Automatically set the `DATABASE_URL` environment variable
   - This is exactly what your app needs!

---

## STEP 6: Set Environment Variables

Environment variables are settings your app needs to run. Think of them as configuration options.

### Detailed Instructions:

1. **In Railway dashboard, go to "Variables"** tab

2. **You should already see:**
   - `DATABASE_URL` (automatically set by MySQL plugin)

3. **Add these additional variables by clicking "New Variable":**

```
JWT_SECRET = your-random-secret-key-12345
VITE_APP_ID = manus-app-id
OAUTH_SERVER_URL = https://api.manus.im
VITE_OAUTH_PORTAL_URL = https://oauth.manus.im
OWNER_OPEN_ID = owner-id
OWNER_NAME = Psychologist
BUILT_IN_FORGE_API_URL = https://api.manus.im
BUILT_IN_FORGE_API_KEY = your-api-key
VITE_FRONTEND_FORGE_API_KEY = your-frontend-key
VITE_FRONTEND_FORGE_API_URL = https://api.manus.im
VITE_ANALYTICS_ENDPOINT = https://analytics.manus.im
VITE_ANALYTICS_WEBSITE_ID = website-id
VITE_APP_TITLE = 🌙 Your Psychologist
VITE_APP_LOGO = 🌙
NODE_ENV = production
```

### Explanation of each variable:

- **JWT_SECRET:** A random secret key for session security. You can use any random string.
- **VITE_APP_ID:** Your Manus application ID (from Manus dashboard)
- **OAUTH_SERVER_URL:** The Manus authentication server
- **VITE_OAUTH_PORTAL_URL:** The Manus login portal
- **OWNER_OPEN_ID:** Your unique Manus user ID
- **OWNER_NAME:** Your name or project name
- **BUILT_IN_FORGE_API_KEY:** Your Manus API key (from Manus dashboard)
- **VITE_FRONTEND_FORGE_API_KEY:** Frontend API key for browser requests
- **VITE_APP_TITLE:** The title shown in the browser tab
- **VITE_APP_LOGO:** The emoji/logo for your app
- **NODE_ENV:** Set to "production" for live deployment

---

## STEP 7: Deploy Your Application

### Detailed Instructions:

1. **In Railway dashboard, look for the "Deploy" button** (usually at the bottom or in the project settings)

2. **Click "Deploy"**

3. **Railway will:**
   - Build your application (compile code)
   - Start the server
   - Make it live on the internet
   - This takes 2-5 minutes

4. **Watch the deployment progress:**
   - You'll see logs showing the build process
   - Look for messages like "Build completed" or "Server started"

5. **Once deployment is complete:**
   - Railway will show you a **public URL** (like `https://psychologist-ai-production.up.railway.app`)
   - This is your live website!

---

## STEP 8: Test Your Live Application

Once deployment is complete:

1. **Click the Railway-generated URL** to open your app

2. **Your chatbot should load!** You should see:
   - The dark glassmorphism design
   - Three persona cards (Stoic Philosopher, Caring Mom, Bold Coach)
   - Language switcher (EN, RU, ES, FR)

3. **Test the functionality:**
   - Click on "Stoic Philosopher"
   - Type a message
   - You should see a typing indicator
   - The AI should respond with a philosophical answer

4. **Try other personas and languages to verify everything works**

---

## STEP 9: Add a Custom Domain (Optional)

If you want a custom domain instead of the Railway URL:

1. **In Railway dashboard, go to "Settings"**

2. **Look for "Domains" section**

3. **Click "Add Domain"**

4. **Enter your domain name** (e.g., psychologist.ru)

5. **Railway will show you DNS records to add:**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records Railway provides
   - Wait 24 hours for DNS to propagate

6. **Your app will be accessible at your custom domain!**

---

## ✅ Verification Checklist

After deployment, verify everything works:

- [ ] App loads at the Railway URL
- [ ] Can see three persona cards
- [ ] Can switch languages (EN, RU, ES, FR)
- [ ] Can click a persona and enter chat
- [ ] Can type a message
- [ ] Typing indicator appears while AI responds
- [ ] AI response appears in chat
- [ ] Can switch chat modes (Be near, Deep dive, etc.)
- [ ] Can go back to persona selection

---

## 🆘 Troubleshooting

### App won't load / Shows error

**Solution:**
1. Check Railway logs (in dashboard)
2. Look for error messages
3. Verify all environment variables are set
4. Wait 5 minutes and refresh the page

### Database connection error

**Solution:**
1. Verify MySQL plugin is added
2. Check that `DATABASE_URL` environment variable exists
3. Wait 30 seconds after adding MySQL plugin
4. Restart the deployment

### Build fails

**Solution:**
1. Check that all files were uploaded to GitHub
2. Verify `package.json` is in the root directory
3. Check Railway build logs for specific errors
4. Try redeploying from Railway dashboard

### App crashes after a few seconds

**Solution:**
1. Check environment variables are all set
2. Verify `NODE_ENV=production` is set
3. Check Railway logs for error messages
4. Restart the deployment

---

## 📞 Getting Help

- **Railway Support:** https://railway.app/support
- **Railway Documentation:** https://docs.railway.app/
- **GitHub Help:** https://docs.github.com/

---

## 🎉 You're Done!

Your Psychologist AI Chatbot is now live on Railway.app!

**Share your Railway URL with anyone to let them chat with your AI psychologists.**

The app will work perfectly for users in Russia, Sochi, and anywhere else in the world! 🚀
