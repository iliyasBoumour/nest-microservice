- The request-response message style is suitable when we want to exchange messages between services.
- The event-based communication is fitting for cases in which we don’t want to wait for a response.

## RabbitMQ

https://www.rabbitmq.com/img/tutorials/intro/hello-world-example-routing.png

- The producer (publisher), its job is to send the messages.
- The consumer waits to receive messages.
- Between the producer and the consumer ther is a queue.
- When the producer sends the message, it lands in the queue. The producer sends the messages through the [exchange], which is a message routing agent.
- Finally, the consumer picks up the message from the queue and handles it.
