# Webmate-AI 
WebMate AI is an AI-powered Chrome extension that lets users ask questions, get explanations, and generate responses directly in the browser using Google Gemini API.


# 🌐 WebMate AI – Chrome Extension

WebMate AI is an intelligent Chrome extension that brings AI assistance directly into your browser. It allows users to ask questions, get instant AI-generated responses, and improve productivity while browsing the web — all powered by Google Gemini AI.


# Features

🤖 AI-powered question answering using Google Gemini

⚡ Fast and lightweight Chrome Extension (Manifest V3)

🔐 Secure API key storage using Chrome Sync Storage

🧠 Natural language understanding

📋 One-click copy of AI responses

🧩 Clean and simple popup UI

⚙️ Dedicated options page to manage API keys


# Tech Stack

Chrome Extension APIs (Manifest V3)

JavaScript

HTML & CSS

Google Gemini API

# 📂 Project Structure

WebMate-AI/
│
├── manifest.json        # Chrome extension configuration
├── background.js        # Handles Gemini API calls
├── content.js           # Injected script (future webpage context support)
├── popup.html           # Extension popup UI
├── popup.js             # Popup logic
├── options.html         # Settings page for API key
├── options.js           # API key storage logic
├── icon.png             # Extension icon
└── README.md


# Installation (Local Setup)
1. Clone this repository:
  git clone https://github.com/your-username/WebMate-AI.git
2. Open Google Chrome and go to:
   chrome://extensions
3. Enable Developer Mode (top-right corner)

4. Click Load unpacked

5. Select the project folder (WebMate-AI)

# Gemini API Key Setup

Open the extension Options page

Generate your API key from Google AI Studio

Paste the key and click Save Settings

🔗 Get API Key: https://makersuite.google.com/app/apikey

# How It Works

1. User types a question in the popup

2. The popup sends the request to background.js

3. background.js securely calls the Gemini API

4. AI-generated response is returned and displayed

5. User can copy the response instantly


# Privacy & Security

1. API keys are stored securely using Chrome Sync Storage

2. No user data is logged or stored externally

3. API calls are made directly from the extension


# Use Cases

1. Students asking conceptual questions

2. Developers seeking quick explanations

3. Researchers summarizing ideas

4. General productivity and learning


# Contributions

Contributions are welcome!
Feel free to fork the repository, improve features, or fix bugs.


# License

This project is licensed under the MIT License.
