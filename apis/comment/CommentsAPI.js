import { BaseAPI } from "../BaseAPI";

export class CommentsAPI extends BaseAPI {
    constructor(){
        super();
        this.url += "/comments";
    }
}