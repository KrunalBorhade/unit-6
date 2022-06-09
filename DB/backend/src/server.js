const app  = require('./index')

const connect = require('./configs/db')

app.listen(5000, async () => {
    try {
        await connect()
    } catch (err) {
        console.log('Something went wrong')
    }
    console.log('listening on port 5000');
})