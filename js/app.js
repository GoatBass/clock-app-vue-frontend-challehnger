
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
        },

        dateFormat(hour){
            let timestamp = Date.parse(hour)
            return new Date(timestamp).toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute:'2-digit'
              });
        }
    },

    created() {
        Requests.getIpFromJSON(this.getDataIp)
        Requests.getTimeFromJSON(this.ip, this.getDataTime)
    }
})

app.mount('#app')