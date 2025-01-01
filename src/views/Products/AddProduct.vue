<template>
  <FormProduct  @saveProduct="saveProduct" />
</template>

<script>
import swal from 'sweetalert2';
import FormProduct from './FormProduct.vue';

export default {
  components: {
    FormProduct
  },
  data() {
    return {
      product: {},
      previewUrl: null
    };
  },
  methods: {
  
    async saveProduct(formData) {


      swal.fire({
        title: '¿Estás seguro de que deseas agregar este producto?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Agregar',
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.$store.dispatch('addProducto', formData);
          const status = this.$store.getters.getStatus;
          if (status) {
            swal.fire({
              title: 'Producto subido con éxito',
              icon: 'success'
            });
            this.$router.push('/productos');
          } else {
            swal.fire({
              title: 'Error al subir el producto',
              icon: 'error'
            });
          }
        }
      });
    }
  }
};
</script>