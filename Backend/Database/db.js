//in this file we are making connection with mongo DB using mongoose lib

import mongoose from "mongoose";

//mongodb connection function
export const Connection = async (USERNAME, PASSWORD, DBNAME) => {

    //srv url to connect with db {things need to change in the url: username, password, db name}
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-ttihiyj-shard-00-00.qciedww.mongodb.net:27017,ac-ttihiyj-shard-00-01.qciedww.mongodb.net:27017,ac-ttihiyj-shard-00-02.qciedww.mongodb.net:27017/${DBNAME}?ssl=true&replicaSet=atlas-jxgbb8-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        //it will create a connection with mongo db using srv url and mongodb internal monitoring service 
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("DB connected");
    } catch (e) {
        console.log("DB connection failed");
    }
}

export default Connection   

