import * as THREE from 'three'
import vertexShader from './shader.vert'
import fragmentShader from './shader.frag'

export class Box extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
    // const material = new THREE.ShaderMaterial({
    //   vertexShader,
    //   fragmentShader,
    // })
    // const material = new THREE.MeshPhongMaterial({
    //   color: 0xff0000,
    //   refractionRatio: 0.985,
    //   reflectivity: 0.95,
    // })
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 1,
      opacity: 1,
      metalness: 0,
      roughness: 0.35,
      ior: 1.5,
      thickness: 0.61,
      // attenuationColor: 0xffffff,
      attenuationDistance: 0.3,
      specularIntensity: 1,
      // specularColor: 0xffffff,
      // envMapIntensity: 1,
      // lightIntensity: 1,
      // exposure: 1
      // transparent: true,
    })

    super(geometry, material)
  }
}
