import { Body, Controller, Get, Post } from '@nestjs/common'
import { GeometryService } from './geometry.service'
import { GeometryDto } from './dto/geometry.dto'
import { Object3D } from 'three'

@Controller('geometry')
export class GeometryController {
  constructor(private readonly geometryService: GeometryService) {}

  @Post()
  computeObject(@Body() vectors: GeometryDto): Object3D {
    return this.geometryService.computeGeometry(vectors)
  }

  @Get()
  greeting(): string {
    return 'This is Geometry endpoint'
  }
}
