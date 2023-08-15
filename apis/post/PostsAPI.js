import { BaseAPI } from "../BaseAPI";

export class PostsAPI extends BaseAPI {
    constructor(){
        super();
        this.url += "/posts";
    }
}