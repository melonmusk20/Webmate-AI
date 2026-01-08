chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "webmate_ask") {
        const userPrompt = request.prompt;

        chrome.storage.sync.get(["geminiApiKey"], async (result) => {
            const apiKey = result.geminiApiKey;

            if (!apiKey) {
                sendResponse({ reply: "API key cannot be empty" });
                return true;
            }

            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [{ text: userPrompt }]
                            }
                        ]
                    })
                });

                const data = await response.json();

                if (data.error) {
                    sendResponse({ reply: "Error: " + data.error.message });
                    return true;
                }

                const aiReply =
                    data.candidates?.[0]?.content?.parts?.[0]?.text ||
                    "Response failure";

                sendResponse({ reply: aiReply });
            } catch (error) {
                sendResponse({ reply: "Network error. Please try again." });
            }
        });

        return true;  
    }
});
