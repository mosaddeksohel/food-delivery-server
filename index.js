const express = require('express');
const app = express();
const port = process.env.PORT || 5000;







app.get('/', (res, req) => {
    res.send('Run the delivery porjects');
})


app.listen(port, () => {
    console.log('Run the server on the', port);

})