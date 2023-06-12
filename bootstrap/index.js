const mongoose = require('mongoose');
const config = require("../config/config")
// const connectDb = async () => {

//     try {
//         const connect = await mongoose.connect(process.env.CONNECTION_STRING )
//         // .then(() => console.log('database connected'))
//         // .catch((err) => console.log(`database not connnected ${err}`))
//         console.log("Database connected: ",
//             connect.connection.host,
//             connect.connection.name

//         )
//     } catch (err) {
//         console.log(err);
//         process.exit(1)

//     }
// }

// module.exports = connectDb();

const connect = async() => {
    try{

        mongoose.set('strictQuery', false);
        await  mongoose.connect(config.MONGODB_URL)
        .then(() => console.log('database connected'))
        .catch((err) => console.log(`database not connnected ${err}`))

       

    }catch(err){
        console.log(err)
    }

}



module.exports=connect()
