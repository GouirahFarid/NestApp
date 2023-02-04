import { Module } from '@nestjs/common';
import { PixelsService } from './pixels.service';
import { PixelsController } from './pixels.controller';

@Module({
  controllers: [PixelsController],
  providers: [PixelsService]
})
export class PixelsModule {}
