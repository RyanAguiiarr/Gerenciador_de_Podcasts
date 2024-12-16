import { podcasts } from "./podcast-model";

export interface filterPodCastModel {
    statusCode: number,
    body: podcasts[],
}