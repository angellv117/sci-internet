import { createStore } from 'vuex'
import auth from './modules/auth'
import user from './modules/user'
import decodeData from './modules/decodeData'
import socket from './modules/socket'
import alertas from './modules/alertas'
import producto from './modules/producto'



export default createStore({
  modules: {
    auth,
    user,
    decodeData,
    producto,
    socket,
    alertas,
   
  }
})
