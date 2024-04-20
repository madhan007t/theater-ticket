const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');
const authRoutes=require('./routes/authRoutes');
const bookingRoutes=require('./routes/bookingRoutes');
const adminRoutes=require('./routes/adminRoutes');


mongoose.connect("mongodb+srv://madhanraj:madhan007@cluster0.jpze5xz.mongodb.net/Theater-booking?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Database is connected');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });


app.use(cors());
app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/auth',authRoutes);
app.use('/bookings',bookingRoutes);


app.listen(5000,()=>{

     console.log('server.js is connected');
})