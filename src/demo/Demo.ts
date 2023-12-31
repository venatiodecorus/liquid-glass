import { Engine } from '../engine/Engine'
import * as THREE from 'three'
import { Box } from './Box'
import { TPlane } from './TPlane'
import { Experience } from '../engine/Experience'
import { Resource } from '../engine/Resources'

export class Demo implements Experience {
  resources: Resource[] = []
  gBox = new Box()
  movingLight = new THREE.PointLight(0x0000ff, 500, 100)
  movingLight2 = new THREE.PointLight(0x00ffff, 300, 100)

  constructor(private engine: Engine) {}

  init() {
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 10),
      new THREE.MeshStandardMaterial({ color: 0xd62828 })
    )

    plane.rotation.x = -Math.PI / 2
    plane.position.y = -2
    plane.receiveShadow = true

    this.engine.scene.add(plane)
    this.engine.scene.add(new THREE.AmbientLight(0xffffff, 0.5))

    let directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.castShadow = true
    directionalLight.position.set(2, 2, 2)

    this.engine.scene.add(directionalLight)

    // this.gBox = new Box()
    this.gBox.castShadow = true
    this.gBox.rotation.y = Math.PI / 4
    this.gBox.position.set(0, 1.2, 0)

    this.engine.scene.add(this.gBox)

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xffb703 })
    )

    sphere.position.set(0, 0.5, -1.5)
    sphere.castShadow = true
    this.engine.scene.add(sphere)

    this.movingLight.position.set(0, 0.5, -4)
    this.engine.scene.add(this.movingLight)
    this.movingLight2.position.set(0, 0.5, -4)
    this.engine.scene.add(this.movingLight2)

    const tPlane = new TPlane(0xfb8500)
    tPlane.position.set(-5, -3, -3)
    tPlane.castShadow = true
    this.engine.scene.add(tPlane)

    const tPlane2 = new TPlane(0x023047)
    tPlane2.position.set(5, -3, -3)
    tPlane2.castShadow = true
    this.engine.scene.add(tPlane2)

    const tPlane3 = new TPlane(0x219ebc)
    tPlane3.position.set(-5, 7, -3)
    tPlane3.castShadow = true
    this.engine.scene.add(tPlane3)

    const tPlane4 = new TPlane(0x8ecae6)
    tPlane4.position.set(5, 7, -3)
    tPlane4.castShadow = true
    this.engine.scene.add(tPlane4)
  }

  resize() {}

  update() {
    this.gBox.rotation.y += 0.01
    this.movingLight.position.x = Math.sin(this.engine.time.currentTime) * 5
    this.movingLight2.position.x = Math.cos(this.engine.time.currentTime) * 5
  }
}
