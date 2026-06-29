# Environment Configuration for Standalone Deployment

Create a `.env` file in the root directory with these variables:

```
# Database Configuration
DATABASE_URL=mysql://username:password@localhost:3306/psychologist_db

# OpenAI API Configuration (get key from https://platform.openai.com/api-keys)
OPENAI_API_KEY=sk-your-openai-api-key-here
OPENAI_MODEL=gpt-4

# Server Configuration
NODE_ENV=production
PORT=3000

# Session Security (generate a random string)
JWT_SECRET=your-random-secret-key-change-this-in-production

# Application Settings
VITE_APP_TITLE=🌙 Your Psychologist
VITE_APP_LOGO=🌙

# Analytics (Optional)
VITE_ANALYTICS_ENABLED=false
```

## How to Get Each Value:

### DATABASE_URL
- Set up MySQL on your server
- Create a database: `CREATE DATABASE psychologist_db;`
- Format: `mysql://username:password@host:port/database_name`
- Example: `mysql://root:password123@localhost:3306/psychologist_db`

### OPENAI_API_KEY
1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Create a new API key
4. Copy and paste it here

### JWT_SECRET
Generate a random string (at least 32 characters):
- On Linux/Mac: `openssl rand -base64 32`
- Or use any random string

### PORT
The port your server will run on (default 3000)

### NODE_ENV
- `development` for testing
- `production` for live deployment
