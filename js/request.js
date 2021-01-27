const Requests = {
    getTimeFromJSON(ip, cb){
        const url = 'http://worldtimeapi.org/api/ip/' + ip
        fetch(url).then(response => response.json()).
        then(result => cb(result)).
        catch(error => console.log('An error has occured: ', error))
    },

    getIpFromJSON(cb){
        const url = 'https://freegeoip.app/json/'
        fetch(url).then(response => response.json()).
        then(result => cb(result)).
        catch(error => console.log('An error has happened: ',error))
    }
}