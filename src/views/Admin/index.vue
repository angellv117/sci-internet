<template>
    <div class="flex justify-center min-h-screen items-center">
        <div v-if="!showForgotPassword" class="w-full max-w-md bg-black shadow-lg rounded-lg p-8">
            <a class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                <img src="/icono.webp" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">KRAMS administrador</span>
            </a>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">Email</label>
                    <input v-model="user.email" type="email" placeholder="example@cenam.mx"
                        class="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-6">
                    <label class="block text-white text-sm font-bold mb-2">Contraseña</label>
                    <div class="relative">
                        <input v-model="user.password" :type="passwordVisible ? 'text' : 'password'"
                            placeholder="Contraseña"
                            class="shadow bg-gray-800 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
                        <button type="button" @click="togglePasswordVisibility()"
                            class="absolute  top-0 right-0 flex items-center justify-center px-2 text-white">
                            <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-center "
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 01-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 01-6 0m6 0a3 3 0 00-6 0M15 12a3 3 0 00-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 01-6 0M12 12a3 3 0 00-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 01-6 0" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 01-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 01-6 0m6 0a3 3 0 00-6 0M15 12a3 3 0 00-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 01-6 0M12 12a3 3 0 00-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 01-6 0" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div class="flex justify-between items-center">
                    <button type="submit"
                        class="bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Iniciar
                        sesión</button>

                </div>
            </form>
        </div>
        <div v-else class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
            <h3 class="text-2xl font-bold mb-6 text-center">Recuperar contraseña</h3>
            <form @submit.prevent="forgotPassword">
                <div class="mb-4">
                    <label class="block text-w text-sm font-bold mb-2">Email</label>
                    <input v-model="user.email" type="email" placeholder="example@cenam.mx"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-w leading-tight focus:outline-none focus:shadow-outline">

                </div>
                <div class="flex justify-between items-center">
                    <button type="button" @click="forgotPassword()"
                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
                    <button type="button" @click="showForgotPassword = false"
                        class="text-yellow-500 hover:text-yellow-700 font-bold">Regresar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { loggedMixin } from '@/mixins/index.js';
import Swal from "sweetalert2";

export default {
    name: 'LoginView',
    mixins: [loggedMixin],
    data() {
        return {
            user: {
                email: "",
                password: ""
            },
            codigo: "",
            codigoVisible: false,
            parte1: "",
            parte2: "",
            parte3: "",
            passwordVisible: false,  // Estado para controlar la visibilidad de la contraseña
            showForgotPassword: false  // Estado para controlar la visibilidad de la contraseña
        }
    },
    methods: {
        // Función para validar si un campo está vacío
        isEmpty(value) {
            return value === null || value === undefined || value === '';
        },

        // Función para validar si el correo es propiedad del CENAM
        validarCorreo() {
            const regex = /^([a-zA-Z0-9_\.\-])+@gmail\.com$/;
            const res = regex.test(this.user.email);
            if (!res) {
                Swal.fire({
                    title: 'Error',
                    text: 'El correo no es propiedad del Krams.',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                });
                return false;
            }
            return true;
        },
        async login() {

            // Validación de campos vacíos
            if (this.isEmpty(this.user.email) || this.isEmpty(this.user.password)) {
                Swal.fire({
                    title: 'Error',
                    text: 'Todos los campos son obligatorios.',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                });
                return;
            }

            // Validación de correo
            if (!this.validarCorreo()) {
                return;
            }

            // Login
            await this.$store.dispatch('login', { user: this.user })
            if (this.logged)
                setTimeout(() => {

                    this.$router.push({ name: "home" })
                }, 10)

            else
                Swal.fire({
                    title: '¡Credenciales icorrectas!',
                    text: 'Correo o Contraseñas incorrectas.',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                });
        },
        // Función para alternar la visibilidad de la contraseña
        togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible;
        },


    },

}
</script>