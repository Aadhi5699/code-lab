import {
    BedrockRuntimeClient,
    ConverseCommand
} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({
    region: "ap-south-1"
});

const command = new ConverseCommand({
    modelId: "apac.amazon.nova-lite-v1:0",

    messages: [
        {
            role: "user",
            content: [
                {
                    text: "Explain what JavaScript is in simple terms."
                }
            ]
        }
    ]
});

const response = await client.send(command);

console.log(response.output.message.content[0].text);