<template>
<div class="min-h-screen bg-white m-4">
    <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        <span class="text-indigo-800 uppercase tracking-widest">Productos</span>
    </h1>

    <div class="overflow-x-auto mt-3 gap-4 mb-4">
        <table id="search-tableLabs" class="min-w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="px-6 py-3">Nombre</th>
                    <th scope="col" class="px-6 py-3">Precio</th>
                    <th scope="col" class="px-6 py-3">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in productos" class="bg-white border-b  hover:bg-gray-50 ">
                    <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-pre-line">
                        <img :src="serverUrl + '/' + producto.imagen" class="w-auto h-8 mr-3">
                        {{ producto.nombre }}
                    </th>
                    <td class="px-6 py-4">
                        {{ producto.precio }}
                    </td>
                    <td>
                        <button @click="editarProducto(producto.id)" type="button" class="bg-indigo-800 hover:bg-indigo-600 text-white px-4 py-2 mx-2 rounded-md">
                            <span class="hidden md:inline">Editar</span>
                            <span class="md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </span>
                        </button>
                        <button @click="eliminarProducto(producto.id)" type="button" class="bg-red-500 text-white px-4 py-2 mx-2 rounded-md">
                            <span class="hidden md:inline">Eliminar</span>
                            <span class="md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
    <div ref="feature7">
        <!-- Modal para descargar datos -->
        <Modal :visible="showModal" @close-modal="showModal = false" />
    </div>
</div>
</template>

<script>
import $ from 'jquery'
import Modal from '@/components/Modal.vue';
import {
    DataTable
} from 'simple-datatables';

export default {
    components: {
        Modal
    },

    data() {
        return {
            productos: {},
            serverUrl: process.env.VUE_APP_API_URL,
            showModal: false,
        };
    },

    methods: {
        downloadData() {
            this.showModal = true
        },
        async fetchProductos() {
            await this.$store.dispatch('getAllProductos');
            this.productos = this.$store.getters.getProductos;
        },
        editarProducto(id) {
            console.log(id);
            this.showModal = true;
        },
        eliminarProducto(id) {
            console.log(id);
            this.showModal = true;
        },

    },
    mounted() {
        this.fetchProductos();
        setTimeout(() => {
            this.$nextTick(() => {
                const tableElement = document.getElementById("search-table");
                if (tableElement) {
                    // Check if DataTable is already initialized
                    if (!$.fn.dataTable.isDataTable(tableElement)) {
                        // Initialize the DataTable
                        $(tableElement).DataTable({
                            responsive: true,

                        });
                    }
                }
            });
        }, 1000);
    }
}
</script>

<style scoped>
/* Si es necesario, puedes agregar más estilos personalizados aquí */
</style>
