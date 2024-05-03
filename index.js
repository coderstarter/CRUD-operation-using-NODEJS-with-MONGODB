const mongoose = require('mongoose');
const express = require('express');
const productRoutes = require('./Routes/productRoutes');
const app = express();
app.use(express.urlencoded());
app.use(express.json());

app.use('/', productRoutes)

mongoose.connect('mongodb+srv://absep98:IGMYuGGqgF9I8GIy@cluster0.nn6miwl.mongodb.net/explore?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Database is connected');
    app.listen(3000, () => {
        console.log('Server is up and running');
    })
})
.catch((err) => console.log(err))

