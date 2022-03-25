import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern({ cmd: 'createEmail' })
  async create(@Payload() createEmailDto: CreateEmailDto) {
    // const channel = context.getChannelRef();
    // const originalMsg = context.getMessage();
    // channel.ack(originalMsg);
    return this.emailService.create(createEmailDto);
  }

  @MessagePattern({ cmd: 'findAllEmail' })
  findAll() {
    return this.emailService.findAll();
  }

  @EventPattern({ cmd: 'removeEmail' })
  async deleteOne(@Payload() id: number) {
    await this.emailService.removeOne(id);
  }
}
