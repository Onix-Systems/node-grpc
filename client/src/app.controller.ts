import { Controller, Get, Post, OnModuleInit, Query } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { emailGrpcClient } from './microservices/email';
import { invoiceGrpcClient } from './microservices/invoice';

@Controller()
export class AppController implements OnModuleInit {
  @Client(emailGrpcClient)
  private readonly emailClient: ClientGrpc;

  @Client(invoiceGrpcClient)
  private readonly invoiceClient: ClientGrpc;

  private emailService;

  private invoiceService;

  onModuleInit() {
    this.emailService = this.emailClient.getService('EmailService');
    this.invoiceService = this.invoiceClient.getService('InvoiceService');
  }

  @Get('sendEmail')
  sendEmail(@Query('email') email) {
    return this.emailService.sendEmail({ email });
  }

  @Post('createInvoice')
  createInvoce() {
    return this.invoiceService.createInvoice({});
  }
}
