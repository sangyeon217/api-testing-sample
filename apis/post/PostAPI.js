import { PostsAPI } from "./PostsAPI";

export class PostAPI extends PostsAPI {
    constructor(num){
        super();
        this.url += `/${num}`;
    }
}