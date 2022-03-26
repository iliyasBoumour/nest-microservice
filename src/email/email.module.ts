import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Email from './entities/email.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Email])],
  controllers: [EmailService],
})
export class EmailModule {}
