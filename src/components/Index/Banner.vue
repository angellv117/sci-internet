<template>
    <div class=" min-h-screen flex flex-col md:flex-row md:justify-center md:items-start bg-sky-600">
        <section class=" flex justify-center items-center" data-aos="fade-up">
            <div class="grid  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="flex flex-col justify-center items-center lg:col-span-7">
                    <p
                        class="text-center text-white text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
                        Sorprendete con la
                    </p>
                    <h1
                        class=" text-center max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white uppercase">
                        Máxima velocidad
                    </h1>
                    <p class="max-w-2xl mb-6  text-gray-900 lg:mb-8 md:text-lg lg:text-xl font-bold">
                        Conoce nuestros planes de internet proximane en tu zona
                    </p>
                    <div class="flex justify-center items-center">
                        <a href="#"
                            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            <p class="text-white block md:hidden">Conocenos</p>
                            <p class="text-white  hidden md:block">Conoce nuestros planes</p>
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#planes"
                            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900">
                            <p class="text-white block md:hidden">Ver más</p>
                            <p class="text-white  hidden md:block">Planes de internet</p>
                        </a>
                    </div>
                </div>
                <div class=" flex-1 mt-10 lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
                    <Model3D :modelUrl="sci" :scalex="1.5" :scaley="1.5" :scalez="80" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Model3D from '@/components/Model3D.vue';
export default {
    name: 'Banner',
    components: {
        Model3D
    },
    data() {
        return {
            sci: '/Models/Banner/sci.glb',
            krams: '/Models/Banner/krams.glb',
        }
    }
}
</script>

<style scoped></style>
