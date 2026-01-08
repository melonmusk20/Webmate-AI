document.addEventListener("DOMContentLoaded", () => {
   chrome.storage.sync.get(["geminiApiKey"], (result) => {
      if(result.geminiApiKey){
        document.getElementById("api-key").value = result.geminiApiKey
      }
   });
});

document.getElementById("save-button").addEventListener("click", () => {
    const apiKey = document.getElementById("api-key").value.trim();
    const message = document.getElementById("success-message");

    if(!apiKey){
        message.textContent = "API key cannot be empty!";
        message.style.color = "red";
        message.style.display = "block";
        return;
    }

    chrome.storage.sync.set({geminiApiKey : apiKey}, () => {
        message.textContent = "Settings saved successfully!";
        message.style.color = "lightgreen";
        message.style.display = "block";


        setTimeout(() => {
            message.style.display = "none";
        }, 3000);
    })
})