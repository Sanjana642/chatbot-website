const chatbotResponses = {
    "hello": "Hi there! How can I assist you today?",
    "services": "We offer web development, AI solutions, and cloud services.",
    "contact": "You can reach us at contact@example.com.",
    "default": "I'm sorry, I didn't understand. Try asking about 'services' or 'contact'."
  };
  
  document.getElementById("chatToggle").addEventListener("click", function() {
    document.getElementById("chatbot").classList.toggle("hidden");
  });
  
  document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      let input = event.target.value.toLowerCase();
      let response = chatbotResponses[input] || chatbotResponses["default"];
      let chatbox = document.getElementById("chatbox");
      
      chatbox.innerHTML += `<div class="text-right text-blue-500">${input}</div>`;
      chatbox.innerHTML += `<div class="text-left text-gray-700">${response}</div>`;
      
      event.target.value = "";
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  });
  