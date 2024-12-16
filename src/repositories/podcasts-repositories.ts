import fs from "fs"
import path from "path"
import { podcasts } from "../models/podcast-model"

const pathData = path.join(__dirname, "/podcasts.json")

export const repoPodcast = async (podcasttext?: string): Promise<podcasts[]> => {
    const data = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(data)

    if(podcasttext){
        jsonFile = jsonFile.filter((podcastName: podcasts)=> podcastName.podcastName === podcasttext)
    }
    return jsonFile
}