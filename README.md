## Install

1. Run `npm install` in `./docker`.
2. Run `npm install` in `./message-sender`.
3. Run `npm install` in `./rest`.

## Getting Started

1. Run `npm run start:docker` to start RabbitMQ.
2. Run `npm run start:nest` to start the NestJS server.
3. In a new terminal, run `npm run start:sender` to start the CLI RabbitMQ message sender (a.k.a. the "Sender").

## Problem

- Nest is opinionated on message shape (it needs the `data` property on the message).
- Our platform currently has a property named `payload` instead of `data`. So Nest says the message data is `undefined`.
- Reproduce:
  1. In the Sender terminal, type `works` and press return (this will send the data in `message-sender/messages/works.json`).
  2. In the NestJS terminal, you'll see the message. This is desired.
  3. In the Sender terminal, type `does-not-work` and press return (this will send the data in `message-sender/messages/does-not-work.json`).
  4. In the NestJS terminal, you'll see `undefined`.

## Solution

- Add a way to transform our message shape into one Nest expects.
- Interceptors and pipes can't solve this problem, since `data` is extracted from the message **before** the interceptors or pipes are called.
