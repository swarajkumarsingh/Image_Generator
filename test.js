const { ChatGPTAPI } = require("chatgpt");
const { TOKEN } = require("./config/keys");

async function example() {
  // sessionToken is required; see below for details
  const api = new ChatGPTAPI({
    sessionToken: TOKEN,
  });

  // ensure the API is properly authenticated
  await api.ensureAuth();

  // send a message and wait for the response
  const response = await api.sendMessage(
    "Write a python version of bubble sort."
  );

  // response is a markdown-formatted string
  console.log(response);
}

example();
