const Requests = {
    getTimeFromJSON(ip, cb){
        const url = 'https://worldtimeapi.org/api/ip/' + ip
        fetch(url).then(response => response.json()).
        then(result => cb(result)).
        catch(error => console.log('An error has occured: ', error))
    },

    getIpFromJSON(cb){
        const url = 'https://ipapi.co/json/'
        fetch(url).then(response => response.json()).
        then(result => cb(result)).
        catch(error => console.log('An error has happened: ',error))
    },

    getRandomQuoteFromJSON(cb){
        const url = 'https://api.quotable.io/random'
        fetch(url).then(response => response.json()).
        then(result => cb(result)).
        catch(error => console.log('An error has happened: ',error))
    }
}