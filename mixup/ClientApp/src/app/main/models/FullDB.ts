import { API } from "./API";
import { Category } from "./Category";
import { Item } from "./Item";

export class FullDB {
    API: API;
    Categories: Category[];
    Items: Item[];
    constructor(options: {
        API?: API;
        Categories?: Category[];
        Items?: Item[];
    } = {}) {
        this.API = options.API ? options.API : new API();
        this.Categories = options.Categories ? options.Categories : [];
        this.Items = options.Items ? options.Items : [];
    }
}