<template>
    <nav class="bg-sky-600 border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/icono.png" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">SCI</span>
        </a>
        <button 
          @click="toggleMenu" 
          type="button" 
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" 
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
  
        <!-- Menú horizontal (pantallas grandes) -->
        <div class="hidden md:block">
          <NavBarOptions @toggleMenu="toggleMenu"/>
        </div>
      </div>
  
      <!-- Menú lateral (pantallas pequeñas) -->
      <div 
        :class="{'-translate-x-full': !isOpen, 'translate-x-0': isOpen}" 
        class="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform transform duration-300 md:hidden z-50"
      >
        <button 
          @click="toggleMenu" 
          class="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
        >
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <NavBarOptions @toggleMenu="toggleMenu" mobile="true"/>
      </div>
    </nav>
  </template>
  
  <script>
  import NavBarOptions from './NavBarOptions.vue';
  export default {
    name: 'Navbar',
    components: {
      NavBarOptions
    },
    data() {
      return {
        isOpen: false // Controla si el menú lateral está abierto o cerrado
      }
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen; // Alterna la visibilidad del menú lateral
      }
    }
  }
  </script>
  