<template>
    <div class="youtube-short-container">
      <iframe
        v-if="embedUrl"
        :src="embedUrl"
        :width="width"
        :height="height"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="youtube-short-iframe"
        @error="handleError"
      ></iframe>
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YoutubeShort',
    props: {
      shortId: {
        type: String,
        required: true
      },
      width: {
        type: [Number, String],
        default: 315
      },
      height: {
        type: [Number, String],
        default: 560
      }
    },
    data() {
      return {
        error: null
      }
    },
    computed: {
      embedUrl() {
        // Usamos la URL estándar de YouTube para incrustar el video
        return `https://www.youtube.com/embed/${this.shortId}`
      }
    },
    methods: {
      handleError(event) {
        this.error = 'Error al cargar el video. Por favor, verifica el ID del Short.'
        this.$emit('error', event)
      }
    }
  }
  </script>
  
  <style scoped>
  .youtube-short-container {
    position: relative;
    width: 100%;
    max-width: 315px;
    margin: 0 auto;
  }
  
  .youtube-short-iframe {
    border: none;
    border-radius: 12px;
  }

  </style>
  