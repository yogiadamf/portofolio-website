import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

export function loadOBJModel(
  scene,
  objPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const mtlLoader = new MTLLoader()
    mtlLoader.load('/model/low.mtl', function (materials) {
      materials.preload()
      
      const loader = new OBJLoader()
      loader.setMaterials(materials)

      loader.load(
        objPath,
        function(object) {
          
          object.name = 'low'
          object.position.y = 0
          object.position.x = 0
          object.receiveShadow = receiveShadow
          object.castShadow = castShadow
          scene.add(object)

          object.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = castShadow
              child.receiveShadow = receiveShadow
            }
          })
          resolve(object)
        },
        undefined,
        function (error) {
          reject(error)
        }
      )
    })
  })
}
