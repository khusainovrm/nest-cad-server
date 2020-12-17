import { Group, Mesh } from 'three'

const SceneUtils = {
  createMultiMaterialObject: (geometry: any, materials: any) => {
    const group = new Group()

    for (let i = 0, l = materials.length; i < l; i++) {
      group.add(new Mesh(geometry, materials[i]))
    }

    return group
  },
}

export { SceneUtils }
