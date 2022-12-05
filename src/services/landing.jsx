import React from "react";
import axios from "axios";
import { environment } from "../environment/environment";


export default  async function RunFile(file,typefile){
    
    //Generamos el path

    const path= environment.api + environment.docs;

    let body={
         "csv":'hola',
         "modelo_a_ejecutar":"hola"
    };
    
    
    return await axios.post(path, body);
 
 }