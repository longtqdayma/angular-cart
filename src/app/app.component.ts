import { Component, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { FooterModel } from "./footer.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "example ICT";
  numberItem: number = 0;
  footerModel: FooterModel = {
    promoCode: "",
    subtotal: 0,
    tax: 0,
    total: 0
  };
  ngOnInit() {
    this.onChangeInfo();
  }

  products: Product[] = [
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

  onHandleRemoveProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    const objec = this.products[index];
    if (index !== -1) {
      //const objec = this.products[index];
      this.products.splice(index, 1);
      this.numberItem = this.numberItem - objec.quantity;
      //alert(objec);
    }
  }

  onHandleChangeQuantity(data: Product) {
    console.log("Quantiry old ", this.numberItem);
    this.onChangeInfo();
    for (let i = 0; i < this.products.length; ++i) {
      //this.numberItem += this.products[i].quantity;
      //this.footerModel.subtotal +=
      //  this.products[i].quantity * this.products[i].price;
      //this.footerModel.tax = this.footerModel.subtotal * 0.1;
      //this.footerModel.total = this.footerModel.subtotal + this.footerModel.tax;
    }
    console.log("Quantiry new ", data.quantity);
  }

  onChangeInfo() {
    this.numberItem = 0;
    this.footerModel.subtotal = 0;
    this.footerModel.tax = 0;
    this.footerModel.total = 0;
    //this.numberItem = this.numberItem + data.quantity;
    this.products.forEach(item => {
      this.numberItem += item.quantity;
      this.footerModel.subtotal += item.quantity * item.price;
      this.footerModel.tax = this.footerModel.subtotal * 0.1;
      this.footerModel.total = this.footerModel.subtotal + this.footerModel.tax;
    });
  }

  onPromoCode(code: string) {
    console.log(code);
  }
}
