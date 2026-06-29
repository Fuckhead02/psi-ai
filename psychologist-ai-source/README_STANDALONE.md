# 🌙 Psychologist AI Chatbot - Standalone Version

A fully independent, self-hosted AI chatbot application with three distinct personalities powered by OpenAI's GPT-4.

## ✨ Features

- **Three AI Personas:**
  - 🏛️ Stoic Philosopher - Calm, philosophical guidance
  - 🤱 Caring Mom - Warm, empathetic support
  - 🔥 Bold Coach - Direct, action-oriented feedback

- **Multi-Language Support:** English, Russian, Spanish, French

- **Chat Modes:**
  - Be near - Supportive presence
  - Deep dive - Thorough exploration
  - Outside view - Objective perspective
  - Blind spots - Challenge assumptions
  - Only question - Socratic method

- **Professional UI:**
  - Dark glassmorphism design
  - Responsive layout
  - Real-time typing indicators
  - Chat history storage

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MySQL 8.0+
- OpenAI API Key

### Installation

1. **Clone or extract the project:**
   ```bash
   cd psychologist-ai-standalone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

4. **Set up database:**
   ```bash
   npm run db:push
   ```

5. **Start development:**
   ```bash
   npm run dev
   ```

6. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📖 Documentation

- **STANDALONE_DEPLOYMENT.md** - Complete deployment guide for production
- **ENV_SETUP.md** - Environment variables configuration
- **DETAILED_DEPLOYMENT_GUIDE.md** - Step-by-step Railway.app deployment

## 🌐 Deployment Options

- **Railway.app** - Recommended, easiest setup
- **Render.com** - Great alternative
- **DigitalOcean** - Full control, VPS option
- **Heroku** - Simple deployment
- **Your own server** - Complete control

See STANDALONE_DEPLOYMENT.md for detailed instructions for each option.

## 🔑 Environment Variables

Required:
- `DATABASE_URL` - MySQL connection string
- `OPENAI_API_KEY` - Your OpenAI API key
- `JWT_SECRET` - Session security key

Optional:
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - development or production
- `VITE_APP_TITLE` - App title
- `VITE_APP_LOGO` - App logo/emoji

## 📊 Project Structure

```
├── client/          # React frontend
├── server/          # Node.js backend
├── shared/          # Shared code
├── drizzle/         # Database schema
└── package.json     # Dependencies
```

## 🧪 Development

```bash
# Run tests
npm run test

# Check TypeScript
npm run check

# Format code
npm run format

# Build for production
npm run build

# Start production server
npm start
```

## 🔒 Security

- Uses JWT for session management
- Environment variables for secrets
- Input validation on all endpoints
- CORS protection
- SQL injection prevention via ORM

## 📝 Customization

### Change Persona Prompts
Edit `server/personas.ts` to customize AI behavior for each persona.

### Modify Translations
Edit `shared/translations.ts` to add or change language support.

### Customize UI
Edit `client/src/index.css` for styling changes using Tailwind CSS.

## 🆘 Support

For issues:
1. Check STANDALONE_DEPLOYMENT.md troubleshooting section
2. Review error logs
3. Verify environment variables are set correctly
4. Check OpenAI API status

## 📄 License

This project is provided as-is for your use.

## 🎉 Ready to Deploy?

1. Read STANDALONE_DEPLOYMENT.md
2. Choose your hosting provider
3. Follow the deployment instructions
4. Share your app with users!

---

**Your Psychologist AI Chatbot is now fully independent and ready for production!** 🚀
