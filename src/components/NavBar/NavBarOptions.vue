<template>
<ul :class="[mobile ? 'flex flex-col p-6 space-y-4' : 'font-medium flex space-x-8 rtl:space-x-reverse']">
    <li>
        <a href="/" @click="toggleMenu" class="block py-2 px-3 text-white hover:text-gray-400">Inicio</a>
    </li>
    <li>
        <a href="#quienesSomos" @click="toggleMenu" class="block py-2 px-3 text-white hover:text-gray-400">Quienes somos</a>
    </li>
    <li>
        <a href="#beneficios" @click="toggleMenu" class="block py-2 px-3 text-white hover:text-gray-400">Beneficios</a>
    </li>
    <li>
        <a href="#planes" @click="toggleMenu" class="block py-2 px-3 text-white hover:text-gray-400">Planes</a>
    </li>
    <li>
        <a href="#contacto" @click="toggleMenu" class="block py-2 px-3 text-white hover:text-gray-400">Contáctanos</a>
    </li>
    <li v-if="admin" class="relative">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" @click="toggleDropdown" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">Administrador
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <!-- Dropdown menu -->
        <ul v-if="showDropdown" class="absolute z-10 text-black bg-white rounded-lg shadow w-44 top-full mt-2 right-0 dark:bg-gray-700" aria-labelledby="dropdownDefaultButton">
            <li>
                <a href="/adminPanel" class="block px-4 py-2 hover:bg-gray-100">
                    Tus productos
                </a>
            </li>
            <li>
                <a href="/agregarProducto" class="block px-4 py-2 hover:bg-gray-100">
                    Agregar producto
                </a>
            </li>
            <li>
                <a href="#" @click="openModal" class="block px-4 py-2 hover:bg-gray-100">
                    Tus servicios
                </a>
            </li>
            <li>
                <a href="#" @click="openModal" class="block px-4 py-2 hover:bg-gray-100">
                    Tus pedidos
                </a>
            </li>
            <li>
                <a @click="logout" class="block px-4 py-2 rounded-lg hover:bg-red-400 bg-red-600 text-white">
                    Cerrar sesión
                </a>
            </li>
        </ul>
    </li>

</ul>
<div v-if="mobile" class=" flex justify-center items-center">
    <Model3D :modelUrl="krams" :scalex="4" :scaley="1" :scalez="75" />
</div>
<div ref="feature7">
    <!-- Modal para descargar datos -->
    <Modal :visible="showModal" @close-modal="showModal = false" />
</div>
</template>

<script>
import Model3D from '@/components/Model3D.vue';
import {
    loggedMixin
} from '@/mixins/index.js';
import Modal from '@/components/Modal.vue';

export default {
    mixins: [loggedMixin],
    props: {
        mobile: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Model3D,
        Modal
    },
    data() {
        return {
            krams: '/Models/Banner/asistente.glb',
            admin: false,
            decode: '',
            showDropdown: false,
            showModal: false
        }
    },
    methods: {
        openModal() {
            this.showModal = true

        },
        toggleMenu() {
            this.$emit('toggleMenu');
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        //botón de salir, limpia el localstorage, el usaurio y el socket
        logout() {
            this.$store.commit('setLogged', false);
            this.$store.commit('setJwt', '');
            localStorage.clear();
            this.admin = false
        }
    },
    mounted() {
        this.$store.dispatch('decryptData', "userRol")
        this.decode = this.$store.getters.getDecode
        if (this.decode == "admin") {
            this.admin = true
            return
        }
    }
}
</script>
