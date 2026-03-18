import axios from "axios";


const API_KEY = process.env.REACT_APP_GROQ_API_KEY;
export const sendToGroq = async (message) => {
try {

const response = await axios.post(
  "https://api.groq.com/openai/v1/chat/completions",
  {
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: message
      }
    ]
  },
  {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    }
  }
);

return response.data.choices[0].message.content;

} catch (error) {

console.error("Groq API error:", error);

return "AI is currently unavailable.";

}
};