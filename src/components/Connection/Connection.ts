import { IApi, IBodyGet, IPostResponse, IBodyPost } from "../../types";

export class Connection {
    protected api: IApi

    constructor(api: IApi) {
        this.api = api;
    }

    async get(uri: string = '/product/') {
        const result = await this.api.get<IBodyGet>(uri);
        return result;
    }

    async post(uri: string = '/order/', data: IBodyPost) {
        const result = await this.api.post<IPostResponse>(uri, data);
        return result;
    }
}