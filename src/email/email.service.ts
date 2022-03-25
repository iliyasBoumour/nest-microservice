import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import Email from './entities/email.entity';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
  ) {}
  create(createEmailDto: CreateEmailDto): Promise<Email> {
    const newEmail = this.emailRepository.create(createEmailDto);
    return this.emailRepository.save(newEmail);
  }

  findAll(): Promise<Email[]> {
    return this.emailRepository.find();
  }
  async findOne(id: number): Promise<Email> {
    try {
      return await this.emailRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async removeOne(id: number) {
    const email = await this.findOne(id);
    this.emailRepository.remove(email);
  }
}
