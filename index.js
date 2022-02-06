const express = require('express');
const app = express();
require('dotenv').config()

const { MongoClient } = require('mongodb');
const port = process.env.PORT || 5000;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.10dvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('Connected to the database')

    }
    finally {
        // await client.close();
    }



}
run().catch(console.dir);





app.get('/', (res, req) => {
    res.send('Run the delivery porjects');
})


app.listen(port, () => {
    console.log('Run the server on the', port);

})