// background.js — handle API requests from popup and call Gemini
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(["geminiApiKey"], (result) => {
      if (!result.geminiApiKey) {
        chrome.tabs.create({ url: "options.html" });
      }
    });
  });
  
  // Listen for messages from popup (or other parts)
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "webmate_ask_background") {
      const userPrompt = request.prompt ?? "";
  
      if (!userPrompt.trim()) {
        sendResponse({ reply: "Please type something!" });
        return true;
      }
  
      // Get API key
      chrome.storage.sync.get(["geminiApiKey"], async (data) => {
        const apiKey = data.geminiApiKey;
        if (!apiKey) {
          sendResponse({ reply: "API key cannot be empty"});
          return;
        }
  
        const url =
  `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  
        try {
          const resp = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: userPrompt }] }]
            })
          });
  
          const json = await resp.json();
  
          if (json.error) {
            sendResponse({ reply: "Error: " + (json.error.message || JSON.stringify(json.error)) });
            return;
          }
  
          const aiReply = json.candidates?.[0]?.content?.parts?.[0]?.text || "Response failure";
          sendResponse({ reply: aiReply });
  
        } catch (err) {
          sendResponse({ reply: "Network or fetch error: " + err.message });
        }
      });
  
      return true; 
        }
  });
  