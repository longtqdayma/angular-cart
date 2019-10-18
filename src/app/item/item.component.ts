import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  products: Product[] = [
    {
      id: 1,
      name: "PRODUCT ITEM NUMBER 1",
      description: "Description for product item number 1",
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/24/9c/d8/625ca95a978775e4b6ce04557f985fca.jpg",
      price: 599087,
      quantity: 2
    },
    {
      id: 2,
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 2",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/305/872/products/macbook-air-mmgg2-1-d3ec85a4-ceb3-46d1-9a77-5e350213182c.jpg?v=1524200478953",
      price: 999056,
      quantity: 1
    }
  ];

  removeProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
