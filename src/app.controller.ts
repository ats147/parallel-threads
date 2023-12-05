import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { WorkerService } from './worker/worker.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly workerService: WorkerService,
  ) {}

  @Get('/find-primes')
  async getPrimes(@Query('start') start: number, @Query('end') end: number): Promise<any> {
    const startTime = Date.now();
    const primes = await this.workerService.runWorker(start, end);
    const duration = Date.now() - startTime;
    return { primes, duration };
  }
}