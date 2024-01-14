import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService
  ) { }

  @Get()
  async getHello(): Promise<string> {
    await this.prisma.user.create({
      data: {
        email: `${randomUUID()}@example.com`,
        name: 'foo',
      }
    })

    return this.appService.getHello();
  }
}
