
const askBtn = document.getElementById("ask-btn");
const inputEl = document.getElementById("user-input");
const responseBox = document.getElementById("response");

askBtn.addEventListener("click", () => {
  const input = inputEl.value.trim();
  if (!input) {
    responseBox.textContent = "Please type something!";
    return;
  }
  responseBox.textContent = "WebMate is thinking...";

  
  chrome.runtime.sendMessage(
    { action: "webmate_ask_background", prompt: input },
    (res) => {
      if (chrome.runtime.lastError) {
        responseBox.textContent = "Error: " + chrome.runtime.lastError.message;
        return;
      }
      if (!res) {
        responseBox.textContent = "No response from background.";
        return;
      }
      responseBox.textContent = res.reply;
    }
  );
});

document.getElementById("copy").addEventListener("click", async () => {
  const text = document.getElementById("response").innerText;

  if(!text.trim()){
    alert("null");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);

    const btn = document.getElementById("copy");

    btn.classList.add("copied");
    btn.textContent = "Copied";

    setTimeout(() => {
      btn.classList.remove("copied");
      btn.textContent = "Copy";
    }, 1500);
  } 
  catch(err){
    alert("Clipboard access denied");
  }
  });
