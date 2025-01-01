import axios from '../plugins/axios' // Importa Axios configurado para hacer solicitudes HTTP.
import { jwtDecode } from 'jwt-decode' // Importa la función jwtDecode para decodificar JWT.
import CryptoJS from 'crypto-js' // Importa CryptoJS para cifrar y descifrar datos.

const secretKey = process.env.VUE_APP_CLAVE_SECRETA // Obtiene la clave secreta desde las variables de entorno.

export default {
    state: {
        logged: false, // Estado que indica si el usuario está logueado.
        jwt: '', // Almacena el token JWT del usuario.
        user: {
            name: '', // Nombre del usuario.
            email: '', // Email del usuario.
            rol: '' // Rol del usuario.
        }
    },
    getters: {
        // Retorna el estado de logueo del usuario.
        getLogged: state => state.logged,

        // Retorna la información del usuario.
        getUser: state => state.user
    },
    mutations: {
        // Cambia el estado de logueo.
        setLogged(state, status) {
            state.logged = status
        },

        // Asigna y cifra el token JWT, y lo almacena en localStorage.
        setJwt(state, token) {
            state.jwt = token
            if (token) {
                // Cifra el token JWT y lo guarda en localStorage.
                localStorage.setItem('jwt', CryptoJS.AES.encrypt(token, secretKey).toString())
            } else {
                // Elimina el token JWT de localStorage si no hay token.
                localStorage.removeItem('jwt')
            }
        },

        // Asigna la información del usuario y la cifra antes de guardarla en localStorage.
        setUser(state, user) {
            if (!secretKey) {
                console.error('La clave secreta de cifrado no está definida.')
                return
            }

            try {
                console.log(user)
                // Cifra y guarda en localStorage los datos del usuario.
                const encryptedId = CryptoJS.AES.encrypt(String(user.id), secretKey).toString()
                const encryptedNombre = CryptoJS.AES.encrypt(user.nombre, secretKey).toString()
                const encryptedRol = CryptoJS.AES.encrypt(user.rol, secretKey).toString()
                const encryptedEmail = CryptoJS.AES.encrypt(user.email, secretKey).toString()

                localStorage.setItem('userID', encryptedId)
                localStorage.setItem('userNombre', encryptedNombre)
                localStorage.setItem('userRol', encryptedRol)
                localStorage.setItem('userEmail', encryptedEmail)

                state.user = user // Actualiza el estado del usuario en Vuex.
            } catch (error) {
                console.error('Error al cifrar datos del usuario:', error)
            }
        }
    },
    actions: {
        // Configura la sesión del usuario: logueo, token y datos del usuario.
        configSession({ commit }, payload) {
            commit('setLogged', payload.logged)
            commit('setJwt', payload.token)
            if (payload.user) {
                commit('setUser', payload.user)
            }
        },

        // Acción para iniciar sesión, solicitar token y configurar la sesión.
        async login({ commit, dispatch }, payload) {
            console.log(payload)
            console.log(axios.defaults.baseURL)
            const jsonPayload = JSON.parse(JSON.stringify(payload.user)) // Copia del payload para evitar mutaciones.
            try {
                const response = await axios.post('/auth/login', {
                    email: jsonPayload.email,
                    password: jsonPayload.password
                })
                if (response.data.message !== "Correo o contraseña incorrectas") {
                    // Configura la sesión con el token JWT recibido.
                    dispatch('configSession', {
                        logged: true,
                        token: "Bearer " + response.data
                    })
                    // Decodifica el token JWT para obtener los datos del usuario.
                    const decoded = jwtDecode("Bearer " + response.data)
                    const user = {
                        nombre: decoded.name,
                        id: decoded.id,
                        rol: decoded.rol,
                        email: decoded.email
                    }
                    commit('setUser', user) // Guarda los datos del usuario en el estado.
                }
            } catch (error) {
                commit('setLogged', false) // Marca como no logueado en caso de error.
                console.error(error)
            }
        },


        // Acción para cerrar sesión.
        async logout({ dispatch }) {
            try {
                await axios.delete('/logout') // Llama a la API para cerrar sesión.
                // Configura la sesión para desloguear al usuario y limpiar los datos.
                dispatch('configSession', {
                    logged: false,
                    token: '',
                    user: {}
                })
                this.commit('setUser', {}, { root: true }) // Limpia los datos del usuario en el estado.
            } catch (error) {
                console.log(error)
            }
        },

        // Acción para registrar un nuevo usuario.
        async signup({ commit }, payload) {
            const jsonPayload = JSON.parse(JSON.stringify(payload.user)) // Copia del payload para evitar mutaciones.
            try {
                const response = await axios.post('/auth/register', {
                    name: jsonPayload.nombre,
                    email: jsonPayload.email,
                    password: jsonPayload.password,
                    notification: jsonPayload.notification
                })
                commit("setCurrentUser", response.data, { root: true }) // Guarda los datos del usuario registrado en el estado.
            } catch (error) {
                commit('setLogged', false) // Marca como no logueado en caso de error.
                console.log(error)
            }
        }
    }
}
