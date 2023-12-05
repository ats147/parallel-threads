import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkerService } from './worker/worker.service';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [WorkerModule],
  controllers: [AppController],
  providers: [AppService, WorkerService],
})
export class AppModule {}
