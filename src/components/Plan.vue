<template>
<div class="max-w-sm  rounded-lg overflow-hidden shadow-lg relative">
    <!-- Imagen de fondo con overlay oscuro -->
    <div class="relative h-full">
        <img :src="plan.imagen" alt="Background" class="absolute inset-0 w-full h-full object-cover">
        <!-- Overlay oscuro -->
        <div class="absolute inset-0 bg-black/70"></div>

        <!-- Contenido -->
        <div class="relative p-6 flex flex-col h-full">
            <!-- Título del plan -->
            <h3 class="text-blue-400 text-xl font-semibold mb-2 uppercase">
                {{ plan.nombre }}
            </h3>

            <!-- Próximamente texto superior -->
            <h2 class="text-white text-3xl font-bold mb-8">
                {{ plan.descripcion }}
            </h2>

            <!-- Lista de características -->
            <ul class="space-y-4 mb-8">
                <li v-for="caracteristica in plan.caracteristicas" class="flex items-center text-white">
                    <svg class="w-5 h-5 mr-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ caracteristica }}
                </li>
            </ul>

            <!-- Próximamente texto inferior -->
            <h2 class="text-white text-2xl font-bold mb-6 text-center ">
                PRÓXIMAMENTE
            </h2>

            <!-- Botón -->
            <a href="https://api.whatsapp.com/send?phone=5214271000353&text=%C2%A1Hola!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20contratar%20el%20*PLAN%20B%C3%81SICO*%20de%20internet" target="_blank" rel="noopener noreferrer" class="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block text-center">
                CONTRATA AQUÍ
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Plan',
    props: {
        plan: {
            type: Object,
            required: true
        }
    }
}
</script>
