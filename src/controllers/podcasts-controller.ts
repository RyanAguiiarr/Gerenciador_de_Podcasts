import {IncomingMessage, ServerResponse} from "http"
import {serviceListEpisodeos} from "../services/list-episodeos-service"
import { serviceFilterEpisodes } from "../services/filter-episodes-service"
import { filterPodCastModel } from "../models/filter-podcast-modelss"

export const getListEpisodeos = async (req: IncomingMessage, res: ServerResponse) => {  
    const content: filterPodCastModel = await serviceListEpisodeos()

    res.writeHead(content.statusCode, {'content-type': "application/json"})
    res.end(JSON.stringify(content.body))
}

export const getFileEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const queryString = req.url?.split("?p=")[1] || ""
    const content: filterPodCastModel = await serviceFilterEpisodes(queryString)

    res.writeHead(content.statusCode, {'content-type': "application/json"})
    res.end(JSON.stringify(content.body))
}