import { IApi, TBodyGet, TPostResponse, TBodyPost } from '../../types';

export class Connection {
    protected api: IApi;

    constructor(api: IApi) {
        this.api = api;
    }

    async get(uri: string = '/product/') {
        const result = await this.api.get<TBodyGet>(uri);
        return result;
    }

    async post(data: TBodyPost, uri: string = '/order/') {
        const result = await this.api.post<TPostResponse>(uri, data);
        return result;
    }
}
