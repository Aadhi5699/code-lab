import "dotenv/config";
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({
  prompt: "Say hello and list 3 tips for building a reliable coding agent.",
  options: {
    allowedTools: [],
  }
})) {
  if (message.type === "assistant" && message.message?.content) {
    for (const block of message.message.content) {
      if ("text" in block) console.log(block.text);
    }
  } else if (message.type === "result") {
    console.log(`Done: ${message.subtype}`);
  }
}