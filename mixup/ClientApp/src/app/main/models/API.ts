export class API {
    ApiKey: string;
    UserName: string;
    PassWord: string;
    Accesstoken: string;
    ClientId: string;
    ClientSecret: string;
    BaseUrl: string;
    constructor(options: {
        ApiKey?: string;
        UserName?: string;
        PassWord?: string;
        Accesstoken?: string;
        ClientId?: string;
        ClientSecret?: string;
        BaseUrl?: string;
    } = {}) {
        this.ApiKey = options.ApiKey ? options.ApiKey : '';
        this.UserName = options.UserName ? options.UserName : '';
        this.PassWord = options.PassWord ? options.PassWord : '';
        this.Accesstoken = options.Accesstoken ? options.Accesstoken : '';
        this.ClientId = options.ClientId ? options.ClientId : '';
        this.ClientSecret = options.ClientSecret ? options.ClientSecret : '';
        this.BaseUrl = options.BaseUrl ? options.BaseUrl : '';
    }
}