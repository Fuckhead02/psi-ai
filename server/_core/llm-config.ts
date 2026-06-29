// OpenRouter model configuration for cost optimization
// Using the cheapest available models to minimize API costs

export const LLM_CONFIG = {
  // Using OpenRouter's routing to the cheapest available model
  // This will automatically select the best value model
  model: "openrouter/auto",
  
  // Alternative specific cheap models (uncomment to use):
  // model: "mistralai/mistral-7b-instruct:free",  // Free tier
  // model: "meta-llama/llama-2-7b-chat:free",     // Free tier
  // model: "openai/gpt-3.5-turbo",                 // Cheapest paid option
  
  // Request parameters to minimize costs
  maxTokens: 500,  // Limit response length
  temperature: 0.7,  // Balanced creativity
};
