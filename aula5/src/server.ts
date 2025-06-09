import { error } from "console";
import { AppDataSource } from "./database/data-source";
import express, { Application } from "express";

const app: Application = express();

app.use( express.json() );
AppDataSource.initialize().then(()=>{
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    })
}).catch((error)=>{
    console.error("Error initializing data source", error);
})