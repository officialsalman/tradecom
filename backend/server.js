const app = require('./app')

const connectDatabase = require('./config/database')


const dotenv = require('dotenv');


// setting config file below
dotenv.config({ path: 'backend/config/config.env'})

// Connecting to database
connectDatabase();




const server = app.listen(process.env.PORT,() => {
    console.log(`Server Started on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})



// Handle Un Handled Promise Rejections

process.on('unhandledRejection',err =>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down server due to un handled promise rejection');
    server.close(() => {
        process.exit(1)
    })
})


// Handled Un Caught Exceptions

process.on('uncaughtException',err =>{
    console.log(`ERROR: ${err.stack}`);
    console.log("Shuttig Down Server Due to Un caught Exceptions");
    process.exit(1)
})

