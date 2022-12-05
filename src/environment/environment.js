import { configuration } from "../webconfig";


let server=configuration.server;



export const environment={
    production:false,

    //API
    api:server,

    //SERVICIOS
    docs: "upload-csv",
}