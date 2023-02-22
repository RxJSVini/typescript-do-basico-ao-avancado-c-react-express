import mongoose from "mongoose"
import config from "./default";
export async function  connect() {
    const dbUri  = config.dbUri;

    try {
        await mongoose.connect(dbUri);
    } catch (e) {
        console.log("Não foi possivel conectar!")
        console.log(`Erro ${e}`); 
    }
}