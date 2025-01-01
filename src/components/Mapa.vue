<template>
  <div class="flex flex-col justify-center items-center">
    <div class="text-2xl font-bold mb-4 text-white">
      Longitud: {{ longitude }}
    </div>
    <div class="text-2xl font-bold mb-4 text-white">
      Latitud: {{ latitude }}
    </div>
  </div>
    <div class="map-container">
      <iframe
        :src="mapUrl"
        :width="width"
        :height="height"
        :style="{ border: 0 }"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="map-iframe"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GoogleMap',
    props: {
      width: {
        type: [Number, String],
        default: '100%'
      },
      height: {
        type: [Number, String],
        default: '100%'
      },
      longitude: {
        type: [Number, String],
        default: '-100.1477504'
      },
      latitude: {
        type: [Number, String],
        default: '20.5035264'
      }
    },
    data() {
      return {
      }
    },
    computed: {
      mapUrl() {
        return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.5300766275893!2d${this.longitude}!3d${this.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d36d6faa9cee47%3A0xa8c82ecee39635be!2sTienda%20Krams!5e0!3m2!1ses!2smx!4v1703887485407!5m2!1ses!2smx`
      }
    }
  }
  </script>
  
  <style scoped>
  .map-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .map-iframe {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>