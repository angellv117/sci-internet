<template>
<div class="w-full my-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 hover:scale-105">
    <a>
        <img :class="classImage" :src="image" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a>
            <h5 class="text-xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
        </a>
        <div class="flex justify-between items-center">
            {{ description }}
        </div>
        <div v-if="price != ''">
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ price }}</span>
                <button @click="clickButton" class="flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                    <svg v-if="buttonText === 'Agregar al carrito'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l1.4-8H6.4M7 13L5.6 5H4M7 13l-2 8m10-8l2 8m-8-1a1 1 0 11-2 0m10 0a1 1 0 11-2 0" />
                    </svg>
                    {{ buttonText }}
                </button>
            </div>
        </div>
    </div>
    <Modal v-if="showModal" :visible="showModal" @close-modal="showModal = false" />
</div>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
    name: 'Card',
    components: {
        Modal
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: ""
        },
        price: {
            type: String,
            required: false,
            default: ""
        },
        image: {
            type: String,
            required: true
        },
        imageClass: {
            type: String,
            required: false,
            default: "p-8 rounded-t-lg max-w-full object-cover"
        },
        buttonText: {
            type: String,
            required: false,
            default: "Agregar al carrito"
        }
    },
    data() {
        return {
            classImage: "p-8 rounded-t-lg w-full h-64 object-cover",
            showModal: false
        }
    },
    mounted() {
        if (this.imageClass === "product-image") {
            this.classImage = "p-8 rounded-t-lg w-full h-64 object-cover"
        }
        if (this.imageClass === "service-image") {
            this.classImage = "p-8 rounded-t-lg max-w-full  object-cover"
        }
    },
    methods: {
        clickButton() {
            this.showModal = true;
        }
    }
}
</script>
