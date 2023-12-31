import * as THREE from 'three'

export class TPlane extends THREE.Mesh {
  constructor(color: number = 0xff0000) {
    const geometry = new THREE.PlaneGeometry(10, 10)
    const material = new THREE.MeshPhongMaterial({
      color: color,
      refractionRatio: 0.985,
      reflectivity: 0.95,
    })
    // const material = new THREE.MeshPhysicalMaterial({
    //   color: 0xff0000,
    //   transmission: 0.75,
    //   opacity: 1,
    //   metalness: 0,
    //   roughness: 0.45,
    //   ior: 1.5,
    //   thickness: 0.01,
    //   attenuationDistance: 1,
    //   specularIntensity: 1,
    // })

    super(geometry, material)
  }
}
