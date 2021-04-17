export class Category {
    CategoryName: string;
    CategoryId: number;
    constructor(options: {
        CategoryName?: string;
        CategoryId?: number;
    } = {}) {
        this.CategoryName = options.CategoryName ? options.CategoryName : '';
        this.CategoryId = options.CategoryId ? options.CategoryId : -1;
    }
}