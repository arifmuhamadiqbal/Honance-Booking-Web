const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server Running on Port:3000');
});

app.get('/', (req,res) => {
    res.render('dashboard.ejs');
});

app.get('/cari', (req,res) => {
    res.render('pencarian.ejs')
})

app.use(express.static('Public'));