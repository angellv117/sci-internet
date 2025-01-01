<template>
    <div class="flex flex-col md:flex-row md:justify-center md:items-center">
      <!-- Contenido existente -->
      <div class="md:basis-1/3 flex flex-col justify-center items-center text-center px-6 py-10" data-aos="fade-down">
        <h1 class="text-6xl font-bold leading-tight">
          <span class="text-indigo-800  ">NUESTRO <span class="text-red-600">YouTube</span></span>
        </h1>
        <p class="mt-4 text-lg md:text-xl text-black max-w-lg">
          Hacemos unboxing de productos, reviews, y más!
        </p>
        <Model3D :modelUrl="krams" :scalex="2" :scaley="1" :scalez="75" />
      </div>
  
      <div class="md:basis-1/2 flex justify-center  items-center mx-auto" data-aos="fade-down">
        <div class="z-10 max-w-sm md:max-w-md lg:max-w-lg w-full hidden md:block">
          <YouTubeVideo :shortId="videoId" />
        </div>
        <div class="z-10 max-w-sm md:max-w-md lg:max-w-lg w-full ">
          <YouTubeVideo :shortId="videoId2" />
        </div>
      </div>
    </div>
  </template>
  
  

<script>
import Model3D from '@/components/Model3D.vue';
import YouTubeVideo from '@/components/YouTubeVideo.vue';

export default {
    name: 'Youtube',
    components: {
        Model3D,
        YouTubeVideo
    },
    data() {
        return {
            krams: '/Models/Banner/asistente.glb',
            videoId: 'yoXhZpNqvOA',
            videoId2: 'gm3OhjQDEOI',
        }
    }
}
</script>

<style scoped>

</style>
