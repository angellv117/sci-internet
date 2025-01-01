<template>
  <Navbar v-if="!$route.path.includes('administracionKrams')" />
   <!-- Contenido principal -->
   <div id="app">
    <router-view />
  </div>
  <FooterKrams v-if="!$route.path.includes('administracionKrams')" />
</template>

<script>
import FooterKrams from '@/components/Footer.vue';  
import Navbar from '@/components/NavBar/NavBar.vue';
import { loggedMixin } from '@/mixins/index.js';

export default {
  mixins: [loggedMixin],
  components: {
    FooterKrams,
    Navbar
  },
  data() {
    return {
      decode: ''
    }
  },
  mounted() {
    //Si existe un token en el localstorage se inicializa la aplicación
    if (localStorage.getItem('jwt')) {
      this.setUserDetails();
    }
  },
  methods: {
    //Guarda los datos en el localstorage
    setUserDetails() {
      this.$store.commit('setLogged', true);
      this.$store.dispatch('decryptData', "jwt")
      this.decode = this.$store.getters.getDecode
      this.$store.commit('setJwt', this.decode);

    },
  },
}
</script>

<style scoped>

</style>