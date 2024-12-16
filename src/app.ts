import {getFileEpisodes, getListEpisodeos} from './controllers/podcasts-controller'
import * as http from "http"

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // QUERY STRING 
    // http://localhost:3333/api/episodeos?p=Podpah
    // baseURL é o que vem antes do ?
    // queryString é tudo que vem depois do ? 
    const [baseURL, queryString] = req.url?.split("?") ?? ["", ""]

    // LISTAR PODCASTS
    if(req.method === "GET" && baseURL === "/api/list"){
       await getListEpisodeos(req, res)
    }

    if(req.method === "GET" && baseURL === "/api/episodeos"){
        await getFileEpisodes(req, res)
     }
}