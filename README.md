# TCP based communicatoion

- The request-response message style is suitable when we want to exchange messages between services.
- The event-based communication is fitting for cases in which we don’t want to wait for a response.

# RabbitMQ

![alt text](https://www.rabbitmq.com/img/tutorials/intro/hello-world-example-routing.png)

- The producer (publisher), its job is to send the messages.
- The consumer waits to receive messages.
- Between the producer and the consumer ther is a queue.
- When the producer sends the message, it lands in the queue. The producer sends the messages through the [exchange], which is a message routing agent.
- Finally, the consumer picks up the message from the queue and handles it.

# gRPC

- Its main idea revolves around creating services in the form of functions that we can call remotely.
- The gRPC clients can directly call a method specified on a server.
- To describe the interface of the service and the payload messages, we use the protocol buffers. It is an efficient binary message format. It serializes very quickly and results in small messages.
- A first step to use gRPC is to create a .proto file using the protocol buffer language.

## Defining the microservice

Here, we need three things:

- the package’s name that we’ve defined in our .proto file
- the path to the .proto file
- the connection URL – defaults to localhost:5000
