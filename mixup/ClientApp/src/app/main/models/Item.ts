export class Item {
    Id: number;
    CategoryId: number;
    Name: string;
    Site: string;
    constructor(options: {
        Id?: number;
        CategoryId?: number;
        Name?: string;
        Site?: string;
    } = {}) {
        this.Id = options.Id ? options.Id : -1;
        this.CategoryId = options.CategoryId ? options.CategoryId : -1;
        this.Name = options.Name ? options.Name : '';
        this.Site = options.Site ? options.Site : '';
    }
}