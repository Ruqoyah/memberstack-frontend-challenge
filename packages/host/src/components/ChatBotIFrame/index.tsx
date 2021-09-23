interface ColorProps {
  color: string;
}

export const ChatBotIFrame = ({ color }: ColorProps) => (
  <iframe
    frameBorder="0"
    title="Chat bot"
    className="chatbot-iframe"
    src={`http://localhost:3002/?color=${color.replace("#", "")}`}
  />
);

export default ChatBotIFrame;
