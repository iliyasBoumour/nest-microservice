import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern({ cmd: 'createEmail' })
  create(@Payload() createEmailDto: CreateEmailDto) {
    return this.emailService.create(createEmailDto);
  }

  @MessagePattern({ cmd: 'findAllEmail' })
  findAll() {
    return this.emailService.findAll();
  }
}
