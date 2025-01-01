<template>
  <!-- Banner -->
  <Banner />

  <!-- Servicios -->
  <Servicios />

  <!-- Nosotros -->
  <QuienesSomos />

  <!-- Por que nosotros -->
  <PorQueNosotros />

  <!-- Planes -->
  <Planes />

  <!-- Marcas -->
  <Marcas />
</template>

<script>
import Banner from '@/components/Index/Banner.vue';
import Servicios from '@/components/Index/Servicios.vue';
import Youtube from '@/components/Index/Youtube.vue';
import QuienesSomos from '@/components/Index/QuienesSomos.vue';
import PorQueNosotros from '@/components/Index/PorQueNosotros.vue';
import Marcas from '@/components/Index/Marcas.vue';
import Productos from '@/components/Index/Productos.vue';
import Ubicacion from '@/components/Index/Ubicacion.vue';
import Planes from '@/components/Index/Planes.vue';
export default {
  name: 'ThreeModel',
  components: {
    Banner,
    Servicios,
    Productos,
    Youtube,
    Marcas,
    QuienesSomos,
    PorQueNosotros,
    Ubicacion,
    Planes
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {

  },
}
</script>

<style scoped></style>