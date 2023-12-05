import { Injectable } from '@nestjs/common';
import { Worker } from 'worker_threads';

@Injectable()
export class WorkerService {
  async runWorker(start: number, end: number): Promise<number[]> {
    return new Promise((resolve, reject) => {
      const worker = new Worker('./src/worker.js', {
        workerData: { start, end },
      });

      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  }
}