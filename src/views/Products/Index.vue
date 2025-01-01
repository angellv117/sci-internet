<template>
    <div class="bg-white  min-h-screen text-gray-800 m-4 py-10 text-center" id="servicios" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
            <span class="text-indigo-800 uppercase tracking-widest">Productos</span>
        </h1>
        <div v-if="productos.length === 0">No hay productos disponibles</div>
        <div v-else>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <Card data-aos="fade-right" v-for="producto in productos" :key="producto.id" :title="producto.nombre"
                    :buttonText="`Ver`" :imageClass="`product-image`" :price="producto.precio"
                    :image="producto.imagen" />
            </div>

        </div>
        <Modal v-if="showModal" @close="showModal = false" />
    </div>
</template>


<script>

import productos from '@/assets/productos.json';
import Card from '@/components/Card.vue';
import Modal from '@/components/Modal.vue';
export default {
    components: {
        Card,
        Modal
    },
    data() {
        return {
            productos: [],
            serverUrl: process.env.VUE_APP_API_URL,
            showModal: false,
        };
    },
    mounted() {
        this.productos = productos.productos;
        //this.fetchProductos();
    },
    methods: {
        openModal(producto) {
            this.showModal = true;
        },
        async fetchProductos() {
            await this.$store.dispatch('getAllProductos');
            this.productos = this.$store.getters.getProductos;
        },
    },
};
</script>


<style scoped>
.product-card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
}

.product-image {
    max-width: 100%;
    height: auto;
}
</style>
