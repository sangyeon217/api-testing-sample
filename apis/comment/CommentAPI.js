import { CommentsAPI } from "./CommentsAPI";

export class CommentAPI extends CommentsAPI {
    constructor(num){
        super();
        this.url += `/${num}`;
    }
}