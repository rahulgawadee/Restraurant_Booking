import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTRAURANT",
    })
    .then(()=> {
        console.log("Connect to database Sucessfully !");
    }).catch(err =>{
        console.log(`Some error occoured while connecting database! ${err}`)
    })
}