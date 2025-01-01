<template>
    <div id="beneficios" class="  relative bg-gray-900 text-white py-16 px-4 overflow-hidden" data-aos="fade-up">
      <!-- Contenedor principal -->
      <div class=" flex flex-col  justify-center items-center md:justify-start md:items-start m-5 relative z-10">
        <!-- Título principal -->
        <h2 class="text-5xl font-bold mb-16">POR QUE CONTRATARNOS</h2>
  
        <!-- Grid de beneficios -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- Soporte 24/7 -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">SOPORTE 24/7</h3>
            <p class="text-gray-300">Te brindamos soporte las 24 hrs al día los 365 días del año</p>
          </div>
  
          <!-- Internet Ilimitado -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-blue-400">INTERNET ILIMITADO</h3>
            <p class="text-gray-300">Todo el mes tendrás internet sin preocuparte de las molestas recargas</p>
          </div>
  
          <!-- Rapidez y Calidad -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">RAPIDEZ Y CALIDAD</h3>
            <p class="text-gray-300">Te atendemos en menos de 24 hrs con personal altamente calificado</p>
          </div>
        </div>
  
        <!-- Segunda fila de beneficios -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Sin Interrupciones -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">SIN INTERRUPCIONES</h3>
            <p class="text-gray-300">Sin importar del clima, podrás disponer de internet</p>
          </div>
  
          <!-- Paga Fácil -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-blue-400">PAGA FÁCIL</h3>
            <p class="text-gray-300">Transferencia, deposito en oxxo o en efectivo</p>
          </div>
  
          <!-- Notificaciones -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">NOTIFICACIONES</h3>
            <p class="text-gray-300">Aviso de mantenimientos, y fallas.</p>
          </div>
        </div>
      </div>
  
      <!-- Círculo decorativo con imagen -->
      <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 hidden lg:block">
        <div class="relative w-full h-full">
          <!-- Círculo azul -->
          <div class="absolute inset-0 bg-blue-500 rounded-full"></div>
          <!-- Imagen -->
          <img 
            src="/Servicios/plus.jpg" 
            alt="Mujer feliz" 
            class="absolute inset-0 w-full h-full object-cover rounded-full"
          >
        </div>
      </div>
  
      <!-- Overlay de fondo oscuro -->
      <div class="absolute inset-0 bg-black/50 -z-10"></div>
      <!-- Imagen de fondo -->
      <img 
        src="/Servicios/basico.webp" 
        alt="Background" 
        class="absolute inset-0 w-full h-full object-cover -z-20"
      >
    </div>
  </template>