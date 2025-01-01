export const loggedMixin = {
    computed: {
        logged() {
            return this.$store.state.auth.logged
        },
        usersRow() {
            return this.$store.getters.getUsers
        },
        userRow() {
            return this.$store.getters.getUser
        },
        selectUserRow() {
            return this.$store.getters.getSelectUser
        },

        currenUserRow() {
            return this.$store.getters.getCurrentUser
        },

        decodeText() {
            return this.$store.getters.getDecode
        },
        socket() {
            return this.$store.getters.getSocket
        },
        alertaData() {
            return this.$store.getters.getDataAlert
        }
    }
}