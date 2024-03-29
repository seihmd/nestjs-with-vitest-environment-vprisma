import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(vPrisma.client)
      .compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', async () => {
    it('should return "Hello World!"', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
  });
});
