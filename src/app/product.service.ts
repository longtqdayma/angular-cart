import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor() {}

  products: Product[];

  findById(id: number): Product {
    const index = this.products.findIndex(product => product.id === id);
    return this.products[index];
  }

  findIndexById(id: number): number {
    const index = this.products.findIndex(product => product.id === id);
    return index;
  }

  removeProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    //const objec = this.products[index];
    if (index !== -1) {
      //const objec = this.products[index];
      this.products.splice(index, 1);
      //this.numberItem = this.numberItem - objec.quantity;
      //alert(objec);
    }
  }

  changeQuantiryProduct(): number {
    let count = 0;
    for (let i = 0; i < this.products.length; ++i) {
      count += this.products[i].quantity;
    }
    return count;
  }

  getAllProduct(): Product[] {
    this.products = [
      {
        id: 1,
        name: "PRODUCT ITEM NUMBER 1",
        description: "Description for product item number 1",
        image:
          "https://salt.tikicdn.com/cache/w1200/ts/product/24/9c/d8/625ca95a978775e4b6ce04557f985fca.jpg",
        price: 5990871,
        quantity: 12
      },
      {
        id: 2,
        name: "PRODUCT ITEM NUMBER 2",
        description: "Description for product item number 2",
        image:
          "https://bizweb.dktcdn.net/thumb/1024x1024/100/305/872/products/macbook-air-mmgg2-1-d3ec85a4-ceb3-46d1-9a77-5e350213182c.jpg?v=1524200478953",
        price: 9990561,
        quantity: 1
      }
    ];
    return this.products;
  }
}
