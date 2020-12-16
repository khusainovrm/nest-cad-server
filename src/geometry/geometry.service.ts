import { Injectable } from '@nestjs/common'
import {Face3, Geometry, Vector3 } from 'three'
import { GeometryDto } from './dto/geometry.dto'


@Injectable()
export class GeometryService {
  computeMesh({ width, height, depth }: GeometryDto): Geometry {

    const vertices = [
      new Vector3(-width, -height, depth), //0
      new Vector3(width, -height, depth), //1
      new Vector3(-width, height, depth), //2
      new Vector3(width, height, depth), //3
      new Vector3(-width, -height, -depth), //4
      new Vector3(width, -height, -depth), //5
      new Vector3(-width, height, -depth), //6
      new Vector3(width, height, -depth), //7
    ]

    const faces = [
      new Face3(0, 3, 2),
      new Face3(0, 1, 3),
      new Face3(1, 7, 3),
      new Face3(1, 5, 7),
      new Face3(5, 6, 7),
      new Face3(5, 4, 6),
      new Face3(4, 2, 6),
      new Face3(4, 0, 2),
      new Face3(2, 7, 6),
      new Face3(2, 3, 7),
      new Face3(4, 1, 0),
      new Face3(4, 5, 1),
    ]

    const geometry = new Geometry()
    geometry.vertices = vertices
    geometry.faces = faces

    return geometry
  }
}
