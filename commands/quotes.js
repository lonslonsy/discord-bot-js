module.exports = {
    name: 'quotes',
    description: 'get quotes from an API',
    execute(message, args){
        return fetch('https://zenquotes.io/api/random')
            .then(res => {
                return res.json()
            })
            .then (data => {
                return data[0]["q"] + " -" + data[0]["a"]
            })
            .then (quote => message.channel.send(quote))
        
    }
}

// This doesn't work for now, I will edit and fix it soon.