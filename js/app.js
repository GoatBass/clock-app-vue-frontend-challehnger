
const app = Vue.createApp({
    data() {
        return {
            dataIpApi: '',
            ip: '',
            dataTimeApi: ''
        }
    },

    methods: {
        getDataIp(data){
            this.dataIpApi = data
            this.ip = data.ip
        },

        getDataTime(data){
            this.dataTimeApi = data
        }
    },

    created() {
        Requests.getIpFromJSON(this.getDataIp)
        Requests.getTimeFromJSON(this.ip, this.getDataTime)
    }
})

app.mount('#app')