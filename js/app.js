
const app = Vue.createApp({
    data() {
        return {
            dataIpApi: '',
            ip: '',
            dataTimeApi: '',
            quote: '',
            showMoreInfo: false,
            isNightTime: false,
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
            if(!this.showMoreInfo){
                this.showMoreInfo = !this.showMoreInfo
                document.querySelector('#quote').classList.add('slide-top')
                document.querySelector('#time').classList.add('slide-top')
                document.querySelector('#buttons').classList.add('slide-top')
                document.querySelector('#moreInfo').classList.add('slide-top')

                document.querySelector('#quote').classList.remove('slide-down')
                document.querySelector('#time').classList.remove('slide-down')
                document.querySelector('#buttons').classList.remove('slide-down')
                document.querySelector('#moreInfo').classList.remove('slide-down')

            } else {
                this.showMoreInfo = !this.showMoreInfo
                document.querySelector('#quote').classList.remove('slide-top')
                document.querySelector('#time').classList.remove('slide-top')
                document.querySelector('#buttons').classList.remove('slide-top')
                document.querySelector('#moreInfo').classList.remove('slide-top')

                document.querySelector('#quote').classList.add('slide-down')
                document.querySelector('#time').classList.add('slide-down')
                document.querySelector('#buttons').classList.add('slide-down')
                document.querySelector('#moreInfo').classList.add('slide-down')

            }
           

        }
    },

    computed: {
        isNight(){
            let datee = Date.parse(this.dataTimeApi.datetime)
            datee = new Date(datee).toLocaleTimeString()
            
            if(parseInt(datee.substring(0, 2)) >= 9 && parseInt(datee.substring(0, 2)) <= 20){
                this.isNightTime = !this.isNightTime
                document.querySelector('body').style.backgroundImage = 'url(../assets/desktop/bg-image-daytime-darker2.png'
                return "Good Morning, it's currently "
            } else {
                this.isNightTime = !this.isNightTime
                document.querySelector('body').style.backgroundImage = 'url(../assets/desktop/bg-image-nightime-darker.png'
                return "Good Night, it's currently "
            }
        }
    },

    created() {
        Requests.getIpFromJSON(this.getDataIp)
        Requests.getTimeFromJSON(this.ip, this.getDataTime)
        Requests.getRandomQuoteFromJSON(this.getQuote)
    }
})

app.mount('#app')