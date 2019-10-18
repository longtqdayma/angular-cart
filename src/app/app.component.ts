import { Component } from "@angular/core";
import { Product } from "./product.model";
import { FooterModel } from "./footer.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "example ICT";
  footerModel: FooterModel = {
    promoCode: "",
    subtotal: 219799,
    tax: 709,
    total: 28979
  };
  products: Product[] = [
    {
      id: 1,
      name: "PRODUCT ITEM NUMBER 1",
      description: "Description for product item number 1",
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/24/9c/d8/625ca95a978775e4b6ce04557f985fca.jpg",
      price: 5990871,
      quantity: 24
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
}
