import { Injectable, NotFoundException, Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import Email from './entities/email.entity';

// we don’t have the subscribers.controller.ts anymore. This time, we only have the SubscribersService that we mark with the  @Controller() decorator. It works thanks to the fact that it matches the name of the service in the .proto file.
@Controller()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
  ) {}
  @GrpcMethod()
  addEmail(createEmailDto: CreateEmailDto): Promise<Email> {
    const newEmail = this.emailRepository.create(createEmailDto);
    return this.emailRepository.save(newEmail);
  }

  @GrpcMethod()
  async getAllEmails(): Promise<{ data: Email[] }> {
    const data = await this.emailRepository.find();
    return { data };
  }
}
