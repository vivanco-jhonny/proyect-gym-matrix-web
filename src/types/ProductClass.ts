export class Product {
    name: string;
    price: number;
    image: string;
    stock: number;
    datein: string;
    dateregister: string;
    mark: string;
    state: string;
    constructor(name: string, price: number, image: string, stock: number, datein: string, dateregister: string, mark: string, state: string) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.stock = stock;
        this.datein = datein;
        this.dateregister = dateregister;
        this.mark = mark;
        this.state = state;
    }
}