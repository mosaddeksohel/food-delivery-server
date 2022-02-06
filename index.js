const express = require('express');
const { get } = require('express/lib/response');
const app = express();
const cors = require('cors');

require('dotenv').config()

const { MongoClient } = require('mongodb');
const port = process.env.PORT || 5000;



// middle wire 
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.10dvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('delivery-food');
        const productCollection = database.collection('products')
        // get all data
        app.get('/product', async (req, res) => {
            const cursor = productCollection.find({});
            const product = await cursor.toArray();
            res.send(product)
        });


        // Post Data
        app.post('/product', async (req, res) => {
            const product = req.body;
            const result = await productCollection.insertOne(product)
            res.json(result)
        })

    }
    finally {
        // await client.close();
    }



}
run().catch(console.dir);





app.get('/', (res, req) => {
    req.send('Run the delivery porjects');
})


app.listen(port, () => {
    console.log('Run the server on the', port);

})