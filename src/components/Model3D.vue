<template>
  <div ref="container" class="scene-container"></div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  name: 'GltfViewer',
  props: {
    modelUrl: {
      type: String,
      required: true
    },
    scalex: {
      type: Number,
      default: 1
    },
    scaley: {
      type: Number,
      default: 1
    },
    scalez: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    // Inicialización de la escena
    this.initScene()
    this.loadModel()
    this.animate()

    // Evento para manejar cambios de tamaño de ventana
    window.addEventListener('resize', this.onWindowResize)
  },
  beforeUnmount() {
    // Limpieza de eventos y recursos
    window.removeEventListener('resize', this.onWindowResize)
    if (this.renderer) {
      this.renderer.dispose()
    }
  },
  methods: {
    initScene() {
      // Crear la escena
      this.scene = new THREE.Scene()
      this.scene.background = null // Esto hace que el fondo sea transparente

      // Configurar la cámara
      this.camera = new THREE.PerspectiveCamera(
        this.scalex,
        this.$refs.container.clientWidth / this.$refs.container.clientHeight,
        0.1,
        1000
      )
      this.camera.position.z = this.scalez

      // Configurar el renderer para que sea transparente
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(
        this.$refs.container.clientWidth,
        this.$refs.container.clientHeight
      )
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.$refs.container.appendChild(this.renderer.domElement)

      // Agregar luces a la escena
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      this.scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(0, 1, 0)
      this.scene.add(directionalLight)

      // Configurar controles de cámara
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.enableDamping = true
      this.controls.dampingFactor = 0.05
      this.controls.enableZoom = false
    },
    loadModel() {
      // Cargar el modelo GLTF
      const loader = new GLTFLoader()
      const modelUrl = this.modelUrl 
      loader.load(
        modelUrl,
        (gltf) => {
          this.model = gltf.scene

          // Centrar el modelo en la escena
          const box = new THREE.Box3().setFromObject(this.model)
          const center = box.getCenter(new THREE.Vector3())
          this.model.position.sub(center)

          // Agregar el modelo a la escena
          this.scene.add(this.model)
          console.log('Modelo cargado correctamente.')
        },
        (xhr) => {
          if (xhr.total > 0) {
          } else {
          }
        },
        (error) => {
          console.error('Error al cargar el modelo:', error)
        }
      )
    },
    animate() {
      // Animar la escena
      requestAnimationFrame(() => this.animate())

      // Rotación automática en el eje Y
      if (this.model) {
        this.model.rotation.y += 0.01
      }

      if (this.controls) this.controls.update()
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera)
      }
    },
    onWindowResize() {
      // Manejar redimensionamiento de ventana
      if (this.camera && this.renderer) {
        this.camera.aspect =
          this.$refs.container.clientWidth / this.$refs.container.clientHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(
          this.$refs.container.clientWidth,
          this.$refs.container.clientHeight
        )
      }
    }
  }
}
</script>

<style scoped>
.scene-container {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
</style>
