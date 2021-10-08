import { Controller, Get, OnModuleInit, Query } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { emailGrpcClient } from './microservices/email';

@Controller()
export class AppController implements OnModuleInit {
  @Client(emailGrpcClient)
  private readonly emailClient: ClientGrpc;

  private emailService;

  onModuleInit() {
    this.emailService = this.emailClient.getService('EmailService');
  }

  @Get('sendEmail')
  sendEmail(@Query('email') email) {
    return this.emailService.sendEmail({ email });
  }
}
