import { IApi, TBodyGet, TPostResponse, TBodyPost } from '../../types';

export class Connection {
    protected api: IApi;

    constructor(api: IApi) {
        this.api = api;
    }

    async get(uri: string = '/product/') {
        return await this.api.get<TBodyGet>(uri);
    }

    async post(data: TBodyPost, uri: string = '/order/') {
        return await this.api.post<TPostResponse>(uri, data);
    }
}
