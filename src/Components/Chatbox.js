import { useEffect } from "react";

const Chatbox = () => {
  useEffect(() => {
    const initializeChatbox = async () => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://cdn.jsdelivr.net/npm/@chaindesk/embeds@latest/dist/chatbox/index.js";
      script.async = true;

      script.onload = async () => {
        const { default: Chatbox } = await import("https://cdn.jsdelivr.net/npm/@chaindesk/embeds@latest/dist/chatbox/index.js");
        const widget = await Chatbox.initBubble({
          agentId: "cm422aik40cg72056zlewmfxx",
          contact: {
            firstName: "John",
            lastName: "Doe",
            email: "customer@email.com",
            phoneNumber: "+33612345644",
            userId: "42424242",
          },
          initialMessages: [
            "Hello Georges, how are you doing today?",
            "How can I help you?",
          ],
          context: "The user you are talking to is John. Start by greeting him by his name.",
        });

        widget.open();
      };

      document.body.appendChild(script);
    };

    initializeChatbox();

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://cdn.jsdelivr.net/npm/@chaindesk/embeds@latest/dist/chatbox/index.js"]'
      );
      if (existingScript) existingScript.remove();
    };
  }, []);

  return null; 
};

export default Chatbox;
