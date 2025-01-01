import axios from '../plugins/axios' // Importa Axios configurado para hacer solicitudes HTTP.
import { jwtDecode } from 'jwt-decode' // Importa la función jwtDecode para decodificar JWT.
import CryptoJS from 'crypto-js' // Importa CryptoJS para cifrar y descifrar datos.

const secretKey = process.env.VUE_APP_CLAVE_SECRETA // Obtiene la clave secreta desde las variables de entorno.

export default {
    state: {
        data: [] //contentrá la data de la alarma +-30
    },
    getters: {
        // Retorna el estado de logueo del usuario.
        getDataAlert: state => state.data,

    },
    mutations: {
        // Cambia el estado de logueo.
        setDataAlert(state, data) {
            state.data = data
        }
    },
    actions: {

        // Extrae la informacion de la anomalia +-30 min
        async getDataAlerta({ commit, dispatch }, payload) {
            const jsonPayload = JSON.parse(JSON.stringify(payload))
            try {
                const response = await axios.post('/laboratorio/getDataAlertas', {
                    table: jsonPayload.table,
                    inicio: jsonPayload.inicio,
                    fin: jsonPayload.fin,
                    columna: jsonPayload.columna
                }, {
                    headers: {
                        'Authorization': CryptoJS.AES.decrypt(localStorage.getItem('jwt'), secretKey).toString(CryptoJS.enc.Utf8)  // Envío de JWT para autenticación. // Envío de JWT para autenticación.
                    }
                })
                commit('setDataAlert', response.data) // Guarda los datos del usuario en el estado.
            } catch (error) {
                console.error(error)
            }
        }
    }
}
