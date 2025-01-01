<template>
<footer  class="bg-black text-white py-8" id="contacto">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Datos de contacto -->
            <div>
                <h2 class="text-xl font-semibold mb-4">Contacto</h2>
                <ul>
                    <li><strong>Teléfono:</strong> 427-690-2786</li>
                    <li><strong>Whatsapp:</strong> 427-100-0353 y 427-161-7248</li>
                    <li><strong>Dirección:</strong>16 de septiembre #72-A

                        Arcila, San Juan del Río,

                        Querétaro.</li>
                </ul>

                <div class="mt-6">
                    <h3 class="text-lg font-semibold">Síguenos</h3>
                    <div class="flex space-x-4 mt-2">
                        <!-- Gmail Icon -->
                        <a href="mailto:krams.090123" target="_blank" class="text-white hover:text-gray-400">
                            <i class="fab fa-google"></i>
                        </a>
                        <!-- Instagram Icon -->
                        <a href="#" target="_blank" class="text-white hover:text-gray-400">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <!-- YouTube Icon -->
                        <a href="#" target="_blank" class="text-white hover:text-gray-400">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <!-- Botón -->
                        <a href="https://api.whatsapp.com/send?phone=5214271000353&text=%C2%A1Hola!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20contratar%20el%20*PLAN%20B%C3%81SICO*%20de%20internet" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <!-- Facebook Icon -->
                        <a href="#" target="_blank" class="text-white hover:text-gray-400">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Mapa 
            <div>
                <h2 class="text-xl font-semibold mb-4">Ubicación</h2>
                <div class="aspect-w-16 aspect-h-9" width="100%" height="300">
                    <Mapa  longitude="-100.1070828" latitude="20.4112159"/>
                </div>
            </div>-->
        </div>
    </div>
</footer>
</template>

<script>
import Mapa from './Mapa.vue';
export default {
    components: {
        Mapa
    }
}
</script>
