<template>
<div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto bg-white rounded-lg  mt-2  md:mt-10 overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Formulario -->
            <div class="p-6">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Agregar Nuevo Producto</h2>
                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Título</label>
                        <input v-model="product.nombre" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Descripción</label>
                        <textarea v-model="product.descripcion" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"></textarea>
                    </div>

                    <div class="grid grid-cols-3 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Alto (cm)</label>
                            <input v-model.number="product.alto" type="number" step="0.01" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700">Ancho (cm)</label>
                            <input v-model.number="product.ancho" type="number" step="0.01" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700">Largo (cm)</label>
                            <input v-model.number="product.largo" type="number" step="0.01" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Precio</label>
                        <input v-model.number="product.precio" type="number" step="0.01" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
                    </div>

                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Guardar Producto
                    </button>
                </form>
            </div>

            <!-- Área de Imagen -->
            <div class="p-6 bg-gray-50 border-l border-gray-200">
                <div @drop.prevent="handleDrop" @dragover.prevent="dragover = true" @dragleave.prevent="dragover = false" @click="triggerFileInput" class="h-full flex flex-col justify-center items-center border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200" :class="[
          dragover ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400',
          selectedImage ? 'bg-gray-50' : ''
        ]">
                    <input ref="fileInput" type="file" class="hidden" accept="image/*" @change="handleImageChange" />

                    <div v-if="!selectedImage" class="text-center p-6">
                        <div class="mx-auto h-24 w-24 text-gray-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div class="text-gray-700 text-lg font-medium mb-2">
                            Arrastra tu imagen aquí
                        </div>
                        <p class="text-gray-500 text-sm">
                            o haz clic para seleccionar
                        </p>
                        <p class="text-gray-400 text-xs mt-2">
                            PNG, JPG, GIF hasta 10MB
                        </p>
                    </div>

                    <div v-else class="p-4 w-full">
                        <div class="relative">
                            <img :src="previewUrl" class="max-h-96 w-full object-contain rounded-lg shadow-lg" alt="Preview" />
                            <button @click.stop="removeImage" class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import swal from 'sweetalert2';

export default {
    name: 'ProductForm',
    props: {
        productData: {
            type: Object,
            required: true,
            default: {}
        },
        img: {
            type: String,
            required: true,
            default: null
        }
    },
    data() {
        return {
            product: {},
            selectedImage: null,
            dragover: false,
            previewUrl: null
        };
    },
    methods: {
        mounted() {
            this.previewUrl = this.img;
            this.product = this.productData;
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        handleDrop(event) {
            this.dragover = false;
            const file = event.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.setImage(file);
            } else {
                swal.fire({
                    title: 'Error',
                    text: 'Por favor, arrastra solo archivos de imagen.',
                    icon: 'error'
                });
            }

            if (file.size > 10000000) {
                swal.fire({
                    title: 'Error',
                    text: 'El archivo no puede ser mayor a 10MB.',
                    icon: 'error'
                });
            }
        },
        handleImageChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.setImage(file);
            }
        },
        setImage(file) {
            this.selectedImage = file;
            this.previewUrl = URL.createObjectURL(file);
        },
        removeImage(event) {
            event.preventDefault();
            this.selectedImage = null;
            this.previewUrl = null;
            this.$refs.fileInput.value = '';
        },
        isObjectAndKeysEmpty(obj) {
            return Object.entries(obj).every(([key, value]) => value === undefined || value === null || value === '');
        },
        async handleSubmit() {
            if (this.isObjectAndKeysEmpty(this.product) || this.selectedImage === null) {
                swal.fire({
                    title: 'Error',
                    text: 'Por favor, complete todos los campos requeridos.',
                    icon: 'error'
                });
                return;
            }

            const formData = new FormData();
            formData.append('nombre', this.product.nombre);
            formData.append('descripcion', this.product.descripcion);
            formData.append('precio', +this.product.precio);
            formData.append('alto', +this.product.alto);
            formData.append('ancho', +this.product.ancho);
            formData.append('largo', +this.product.largo);
            formData.append('imagen', this.selectedImage);

            this.$emit('saveProduct', formData);
        }
    }
};
</script>
