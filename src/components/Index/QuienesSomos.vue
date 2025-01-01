<template>
  <div id="quienesSomos" class="container mx-auto px-4 py-12" data-aos="fade-up" data-aos-delay="100">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
      <!-- Left content -->
      <div class="w-full lg:w-1/3 space-y-6">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left">
          <span class="text-indigo-800 uppercase tracking-widest">Quienes somos</span>
        </h1>
        <p class="text-gray-900">
          Somos una empresa proveedora de servicios de internet de la más alta calidad, llevamos nuestros servicios a los 
          lugares donde otros no llegan, utilizando equipo de punta. Nuestro equipo de trabajo se encuentra altamente calificado 
          para realizar la mejor instalación y nuestro equipo de soporte se encuentra al pendiente para resolverte cualquier duda a
           la brevedad posible.        </p>
      </div>

      <!-- Right carousel -->
      <div class="w-full lg:w-1/2">
        <Carousel 
          :items-to-show="1" 
          :wrap-around="true" 
          :transition="1000" 
          :autoplay="3000">
          <Slide v-for="image in carousel" :key="image.id">
            <div class="carousel__item">
              <img 
                :src="image.imagen" 
                class="w-full rounded-lg shadow-lg" 
                alt="producto"
              >
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      carousel: [
        { imagen: '/Carrusel/1.jpg' },
        { imagen: '/Carrusel/2.jpg' },
        { imagen: '/Carrusel/3.jpg' },
        { imagen: '/Carrusel/4.jpg' },
      ]
    };
  },
};
</script>

<style scoped>
.carousel__item {
  padding: 0.5rem;
}

.carousel__slide {
  padding: 0;
}

@media (max-width: 768px) {
  .carousel__item {
    padding: 0.25rem;
  }
}
</style>