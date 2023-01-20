const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      
    }).then(con=>{
        console.log(`MongoDb Database connected with HOST: ${con.connection.host}`)
    })

}

module.exports = connectDatabase