const secretKey = process.env.VUE_APP_CLAVE_SECRETA // Obtiene la clave secreta desde las variables de entorno.
import CryptoJS from 'crypto-js' // Importa CryptoJS para cifrar y descifrar datos.
export default {
    state: {
        decode: "" //guarda el valor decodificado 
    },
    getters: {
        // obtiene el valor decodificado
        getDecode: state => state.decode,
    },
    mutations: {
        // Asigna el valor decodificado.
        setDecode: function (state, data) {
            state.decode = data;
        },
    },
    actions: {
        /**
             * Descifra un dato desde localStorage.
             * @param {string} key - La clave en localStorage.
             * @returns {string} - El valor descifrado.
             */
        decryptData({ state, commit }, key) {
            const encryptedData = localStorage.getItem(key);
            if (!encryptedData) {
                console.warn(`No se encontraron datos cifrados para la clave: ${key}`);
                return "";
            }

            try {
                const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
                const decode = bytes.toString(CryptoJS.enc.Utf8);
                commit("setDecode", decode)
            } catch (error) {
                console.error(`Error al descifrar los datos para la clave: ${key}`, error);
                return "";
            }
        },
    }
}
