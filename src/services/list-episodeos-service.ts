import { filterPodCastModel } from "../models/filter-podcast-modelss"
import { repoPodcast } from "../repositories/podcasts-repositories"



export const serviceListEpisodeos = async (): Promise<filterPodCastModel> => {
    // DEFINE CONTRATO
    
     let responseFormat: filterPodCastModel = {
            statusCode: 0 ,
            body: [],
        }

    // BUSCA OS DADOS

    const data = await repoPodcast()

    // VERIFICA O TIPO DE RESPOSTA

    if(data.length !== 0){
        responseFormat.statusCode = 200
    }else{
        responseFormat.statusCode = 204
    }

    responseFormat.body = data
     return responseFormat
}