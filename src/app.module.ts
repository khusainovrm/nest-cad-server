import { Module } from '@nestjs/common'
import { GeometryController } from './geometry/geometry.controller'
// import { GeometryService } from './geometry/geometry.service'

@Module({
  imports: [],
  controllers: [GeometryController],
  providers: [],
  // providers: [GeometryService],
})
export class AppModule {}
