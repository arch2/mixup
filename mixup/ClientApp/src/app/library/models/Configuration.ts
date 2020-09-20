export class Configuration {
    APIEndpoint: string;
    constructor(options: {
        APIEndpoint?: string
    } = {}) {
        this.APIEndpoint = options.APIEndpoint ? options.APIEndpoint : '/api';
    }
}