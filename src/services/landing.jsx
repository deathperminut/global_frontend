import React from "react";
import axios from "axios";
import { environment } from "../environment/environment";


export default  async function RunFile(file,typefile){
    
    //Generamos el path

    const path= environment.api + environment.docs;

    let body = new FormData();
    body.append('csv', file);
    body.append('modelo_a_ejecutar',typefile)

    return await axios.post(path,body);
 
 }