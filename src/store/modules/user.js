import axios from '../plugins/axios' // Importa Axios configurado para hacer solicitudes HTTP.
const secretKey = process.env.VUE_APP_CLAVE_SECRETA // Obtiene la clave secreta desde las variables de entorno.
import CryptoJS from 'crypto-js' // Importa CryptoJS para cifrar y descifrar datos.
export default {
    state: {
        users: [], // Lista de todos los usuarios.
        email: [], // Lista de usuarios filtrados por correo electrónico.
        selectUser: {}, // Usuario seleccionado (puede ser para edición o visualización).
        currentUser: {} // Usuario actualmente logueado.
    },
    getters: {
        // Retorna la lista de todos los usuarios.
        getUsers: state => state.users,

        // Retorna la lista de usuarios filtrados por correo electrónico.
        getEmail: state => state.email,

        // Retorna el usuario seleccionado.
        getSelectUser: state => state.selectUser,

        // Retorna el usuario actualmente logueado.
        getCurrentUser: state => state.currentUser
    },
    mutations: {
        // Asigna la lista de usuarios al estado.
        setUsers(state, data) {
            state.users = data
        },

        // Asigna la lista de usuarios filtrados por correo electrónico al estado.
        setEmail(state, data) {
            state.email = data
        },

        // Asigna el usuario seleccionado al estado.
        setSelectUser(state, data) {
            state.selectUser = data
        },

        // Asigna el usuario actualmente logueado al estado.
        setCurrentUser(state, data) {
            state.currentUser = data
        }
    },
    actions: {
        // Acción para obtener todos los usuarios.
        async getAllUsuarios({ commit }) {
            try {
                const response = await axios.get('/user', {
                    headers: {
                        'Authorization': CryptoJS.AES.decrypt(localStorage.getItem('jwt'), secretKey).toString(CryptoJS.enc.Utf8)
                    }
                })
                commit('setUsers', response.data) // Guarda la lista de usuarios en el estado.
            } catch (error) {
                console.log(error)
            }
        },

        // Acción para obtener un usuario específico por ID.
        async getUsuario({ commit }, payload) {
            try {
                const response = await axios.get(`/user/${payload.userId}`, {
                    headers: {
                        'Authorization': CryptoJS.AES.decrypt(localStorage.getItem('jwt'), secretKey).toString(CryptoJS.enc.Utf8) // Envía el JWT en los headers para autenticación.
                    }
                })
                commit('setSelectUser', response.data) // Guarda el usuario seleccionado en el estado.
            } catch (error) {
                console.log(error)
            }
        },

        // Acción para obtener usuarios filtrados por correo electrónico.
        async getUsuarioByCorreo({ commit }, payload) {
            try {
                const response = await axios.post(`/user/email`, {
                    email: payload.email
                }, {

                })
                commit('setEmail', response.data) // Guarda la lista de usuarios filtrados en el estado.
            } catch (error) {
                console.log(error)
            }
        },

        // Acción para eliminar un usuario por ID.
        async deleteUsuario({ commit }, payload) {
            try {
                await axios.delete(`/user/${payload.userId}`, {
                    headers: {
                        'Authorization': CryptoJS.AES.decrypt(localStorage.getItem('jwt'), secretKey).toString(CryptoJS.enc.Utf8) // Envía el JWT en los headers para autenticación.
                    }
                })
                console.log("Usuario eliminado") // Log de confirmación de eliminación.
            } catch (error) {
                console.log(error)
            }
        },

        // Acción para actualizar los datos de un usuario.
        async updateUsuario({ commit }, payload) {
            try {
                const response = await axios.patch(`/user/${payload.userId}`, {
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

        // Acción para actualizar perfil de usuario.
        async updatePerfil({ commit }, payload) {
            console.log(payload)
            try {
                const response = await axios.patch(`/user/updatePerfil/${payload.userId}`, {
                    name: payload.name,
                    password: payload.password,
                    notification: payload.notification
                }, {
                    headers: {
                        'Authorization': CryptoJS.AES.decrypt(localStorage.getItem('jwt'), secretKey).toString(CryptoJS.enc.Utf8) // Envía el JWT en los headers para autenticación.
                    }
                })
                commit('setSelectUser', response.data) // Actualiza el estado con los datos del usuario modificado.
            } catch (error) {
                console.log(error)
            }
        }
    }
}
