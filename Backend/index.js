const express = require('express');        //root de node
const mongoose = require('mongoose');     //pour se connecter a notre db
const cors = require('cors');             //se connecter a notre db trought react
const { noteRoutes} = require('./routes/notes.routes');

require('dotenv').config();

const uri = "mongodb+srv://hajar-azmi:HAJARazmi1996@cluster0.qd1fw.mongodb.net/<dbname>?retryWrites=true&w=majority" ;

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

const app = express();

app.use(express.json({extended : false}));

app.use(cors());


mongoose.connect(uri).then(() => console.log('connected')).catch(err => console.log(err));

app.get('/',(req,res) => {
  res.send('api working');
});

app.use('/', noteRoutes);

const port = process.env.PORT || 3200;

app.listen(port,() => console.log('server running at port : ' + port));



