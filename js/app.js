
const app = Vue.createApp({
    data() {
        return {
            dataIpApi: '',
            ip: '',
            dataTimeApi: '',
            quote: '',
            showMoreInfo: false
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

        getQuote(data){
            this.quote = data
        },

        updateQuote(){
            let newQuote = Requests.getRandomQuoteFromJSON(this.getQuote)
            this.quote = newQuote
        },

        dateFormat(hour){
            let timestamp = Date.parse(hour)
            return new Date(timestamp).toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute:'2-digit'
              });
        },

        toggleInfo(){
            this.showMoreInfo = !this.showMoreInfo
        }
    },

    created() {
        Requests.getIpFromJSON(this.getDataIp)
        Requests.getTimeFromJSON(this.ip, this.getDataTime)
        Requests.getRandomQuoteFromJSON(this.getQuote)
    }
})

app.mount('#app')