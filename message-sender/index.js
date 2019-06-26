const amqp = require("amqplib/callback_api");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

async function promptMessage({ sendToQueue }) {
  const { messageName } = await inquirer.prompt({
    name: "messageName",
    type: "input",
    message: "Message name:"
  });

  const messagePath = path.join(
    process.cwd(),
    "messages",
    `${messageName}.json`
  );

  if (!fs.existsSync(messagePath)) {
    console.error(`File does not exist: "${messagePath}"`);

    return;
  }

  const message = JSON.parse(fs.readFileSync(messagePath, "utf8"));

  sendToQueue(message);

  console.log("...Sent!\n");
}

async function main() {
  const url = "amqp://hip:hop@localhost:5672";
  const queueName = "test";

  amqp.connect(url, (error, connection) => {
    if (error) {
      throw error;
    }

    connection.createChannel(async (error, channel) => {
      if (error) {
        throw error;
      }

      channel.assertQueue(queueName);

      function sendToQueue(data) {
        channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
      }

      do {
        await promptMessage({ sendToQueue });

        // eslint-disable-next-line no-constant-condition
      } while (true);
    });
  });
}

main();
