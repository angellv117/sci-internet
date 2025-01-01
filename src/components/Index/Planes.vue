<template>
    <div class=" justify-center items-center container mx-auto px-4 py-12" data-aos="fade-right" data-aos-delay="100">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left">
            <span class="text-indigo-800 uppercase tracking-widest">Conoce nuestros planes</span>
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4" data-aos="fade-up" data-aos-delay="200">
            <Plan v-for="plan in planes" :key="plan.id" :plan="plan" />
        </div>
    </div>
</template>

<script>
import Plan from '@/components/Plan.vue';
export default {
    name: 'Planes',
    components: {
        Plan
    },
    data() {
        return {
            planes: [{
                id: 1,
                nombre: 'Plan Básico',
                descripcion: 'PROXIMAMENTE',
                caracteristicas: ['100 Mbps', '100 Mbps', '100 Mbps'],
                imagen: '/Servicios/basico.webp'
            }, {
                id: 2,
                nombre: 'Plan Plus',
                descripcion: 'PROXIMAMENTE',
                caracteristicas: ['200 Mbps', '200 Mbps', '200 Mbps'],
                imagen: '/Servicios/plus.jpg'
            },
            {
                id: 3,
                nombre: 'Plan EXTREME',
                descripcion: 'PROXIMAMENTE',
                caracteristicas: ['500 Mbps', '500 Mbps', '500 Mbps'],
                imagen: '/Servicios/extreme.jpeg'
            }
        ]
        }
    }   
}
</script>