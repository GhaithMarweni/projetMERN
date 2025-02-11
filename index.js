const express=require('express');
const database = require('./src/database/db.config');

require('dotenv').config(); 

const app=express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
database.mongoose.connect(database.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
).then(()=>{
    console.log('connected to database');
}) 

app.use(express.json());

app.get('/', (req, res)=>{

res.send({message: 'Hellm, Word!'});

})
require('./src/api/routes/routes')(app);   

 
app.listen(process.env.PORT, ()=>{

console.log ('listening on port', process.env.PORT);

});