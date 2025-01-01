import axios from '../plugins/axios' // Importa Axios configurado para hacer solicitudes HTTP.
const secretKey = process.env.VUE_APP_CLAVE_SECRETA // Obtiene la clave secreta desde las variables de entorno.
import CryptoJS from 'crypto-js' // Importa CryptoJS para cifrar y descifrar datos.
export default {
    state: {
        productos: [], // Lista de todos los productos.
        producto: {}, // Producto seleccionado (puede ser para edición o visualización).
        status: false, // para saber si se ha subido correctamente el producto
       
    },
    getters: {
        // Retorna la lista de todos los productos.
        getProductos: state => state.productos,

        // Retorna el producto seleccionado.
        getProducto: state => state.producto,

        // Retorna el estado de la subida del producto.
        getStatus: state => state.status,

    },
    mutations: {
        // Asigna la lista de productos al estado.
        setProductos(state, data) {
            state.productos = data
        },

        // Asigna la lista de usuarios filtrados por correo electrónico al estado.
        setProducto(state, data) {
            state.producto = data
        },

        // Asigna el estado de la subida del producto.
        setStatus(state, data) {
            state.status = data
        },

    },
    actions: {
        // Acción para obtener todos los productos.
        async getAllProductos({ commit }) {
            try {
                const response = await axios.get('/producto', {

                })
                commit('setProductos', response.data) // Guarda la lista de productos en el estado.
            } catch (error) {
                console.log(error)
            }
        },

        // Acción para agregar un producto.
        async addProducto({ commit }, payload) {
            try {
                const response = await axios.post('/producto', payload,
                    {
                        headers: {
                            'Authorization': CryptoJS.AES.decrypt(localStorage.getItem('jwt'), secretKey).toString(CryptoJS.enc.Utf8)
                    }
                });
                if (response.status == 200 || response.status == 201) {
                    commit('setStatus', true)
                }
            } catch (error) {
                console.log(error);
            }
        },

        // Acción para obtener un producto específico por ID.
        async getProducto({ commit }, payload) {
            try {
                const response = await axios.get(`/producto/${payload.productoId}`, {
                    headers: {
                        'Authorization': CryptoJS.AES.decrypt(localStorage.getItem('jwt'), secretKey).toString(CryptoJS.enc.Utf8) // Envía el JWT en los headers para autenticación.
                    }
                })
                commit('setProducto', response.data) // Guarda el producto seleccionado en el estado.
            } catch (error) {
                console.log(error)
            }
        },


        // Acción para eliminar un producto por ID.
        async deleteProducto({ commit }, payload) {
            try {
                await axios.delete(`/producto/${payload.productoId}`, {
                    headers: {
                        'Authorization': CryptoJS.AES.decrypt(localStorage.getItem('jwt'), secretKey).toString(CryptoJS.enc.Utf8) // Envía el JWT en los headers para autenticación.
                    }
                })
                console.log("Producto eliminado") // Log de confirmación de eliminación.
            } catch (error) {
                console.log(error)
            }
        },

        // Acción para actualizar los datos de un producto.
        async updateProducto({ commit }, payload) {
            try {
                const response = await axios.patch(`/producto/${payload.productoId}`, {
                    name: payload.name,
                    role: payload.role
                }, {
                    headers: {
                        'Authorization': CryptoJS.AES.decrypt(localStorage.getItem('jwt'), secretKey).toString(CryptoJS.enc.Utf8) // Envía el JWT en los headers para autenticación.
                    }
                })
                commit('setSelectUser', response.data) // Actualiza el estado con los datos del usuario modificado.
            } catch (error) {
                console.log(error)
            }
        },

    
    }
}
