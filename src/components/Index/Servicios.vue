<template id="servicios">
    <div class="min-h-screen bg-white text-gray-800 m-4 py-10 text-center" id="servicios" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
            <span class="text-indigo-800 uppercase tracking-widest">Servicios</span>
        </h1>

        <p class="text-center text-lg">
            Conoce todo lo que podemos ofrecerte con nuestras herramientas y servicios de última generación.
        </p>
        <div class="flex justify-center items-center">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <Card data-aos="fade-right"  v-for="servicio in servicios" :key="servicio.id" :title="servicio.nombre"
                    :description="servicio.descripcion" :image="servicio.imagen" :imageClass="`service-image`" />
            </div>
        </div>

    </div>
</template>

<script>
import Model3D from '@/components/Model3D.vue';
import Card from '@/components/Card.vue';
export default {
    name: 'Servicios',
    components: {
        Model3D,
        Card
    },
    data() {
        return {
            servicios: [
                {
                    id: 1,
                    nombre: 'Internet',
                    descripcion: 'Internet de última generación, con las mejores configuraciones y precios',
                    imagen: '/Servicios/internet.jpg'
                },
                {
                    id: 2,
                    nombre: 'Asesorías y cotizaciones',
                    descripcion: 'Asesorías y cotizaciones personalizadas para tu empresa/negocio u hogar',
                    imagen: '/Servicios/asesorias.jpeg'
                },
                {
                    id: 3,
                    nombre: 'Atencion al cliente',
                    descripcion: 'Atencion al cliente, las 24 horas del día y personalizadas',
                    imagen: '/Servicios/atencion.jpg'
                },

            ],
            krams: '/Models/Banner/krams.glb'
        }
    }
}
</script>