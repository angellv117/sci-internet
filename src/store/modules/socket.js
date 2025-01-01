import axios from '../plugins/axios' // Importa Axios configurado para hacer solicitudes HTTP.
import { io } from "socket.io-client";
export default {
    state: {
        socket: null, 
    },
    getters: {
        // Retorna la lista de todos los usuarios.
        getSocket: state => state.socket,

    },
    mutations: {
        // Asigna la lista de usuarios al estado.
        setSocket(state, data) {
            state.socket = data
        },
    },
    actions: {
        initializeSocket({ commit }, apiUrl) {
            const socket = io(axios.defaults.baseURL);
            commit('setSocket', socket);
        }
    }
}
