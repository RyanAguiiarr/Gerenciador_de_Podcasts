import { filterPodCastModel } from "../models/filter-podcast-modelss"
import { repoPodcast } from "../repositories/podcasts-repositories"


export const serviceFilterEpisodes = async (podcastName: string): Promise<filterPodCastModel> => {
    let responseFormat: filterPodCastModel = {
        statusCode: 0 ,
        body: [],
    }
    const data  = await repoPodcast(podcastName)
    if(data.length !== 0){
        responseFormat.statusCode = 200
    }else{
        responseFormat.statusCode = 204
    }

    responseFormat.body = data

    return responseFormat
}