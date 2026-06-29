# Psychologist AI Chatbot - Project TODO

## Phase 1: Backend Setup
- [x] Configure Qwen AI integration via built-in LLM API
- [x] Create persona system prompts for Stoic Philosopher, Caring Mom, Bold Coach
- [x] Implement chat tRPC procedure with persona and language support
- [x] Add mode instruction handling (Be near, Deep dive, Outside view, Blind spots, Only question)
- [x] Test LLM responses for each persona and language

## Phase 2: Frontend Migration
- [x] Migrate static HTML styling to React components with Tailwind
- [x] Create ChatScreen component with preserved dark gradient glassmorphism design
- [x] Create CharacterCard component for persona selection
- [x] Create LanguageSwitcher component (EN, RU, ES, FR)
- [x] Implement message display with user/bot styling
- [x] Add chat input and send button

## Phase 3: Chat Functionality
- [x] Implement chat history management in state
- [x] Wire frontend to tRPC chat procedure
- [x] Add typing indicator while AI is generating
- [x] Display AI responses in chat UI
- [x] Implement mode button functionality

## Phase 4: Multi-language Support
- [x] Preserve all translations (EN, RU, ES, FR)
- [x] Ensure AI responds in selected language
- [x] Test language switching during chat

## Phase 5: Testing & Polish
- [x] Test all three personas with different modes
- [x] Verify dark gradient glassmorphism styling is intact
- [x] Test language switching
- [x] Verify typing indicators and response display
- [x] Cross-browser testing

## Phase 6: Deployment
- [x] Create checkpoint
- [x] Deploy to production
- [x] Verify live functionality
