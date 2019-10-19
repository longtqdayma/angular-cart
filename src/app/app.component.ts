import { Component, OnInit, DoCheck } from "@angular/core";
import { Product } from "./product.model";
import { FooterModel } from "./footer.model";
import { ProductService } from "./product.service";
import { PromoService } from "./promo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, DoCheck {
  title = "example ICT";
  numberItem: number = 0;
  footerModel: FooterModel = {
    promoCode: "",
    subtotal: 0,
    tax: 0,
    total: 0,
    discount: 0
  };
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private promoService: PromoService
  ) {}

  ngOnInit() {
    this.products = this.productService.getAllProduct();
  }

  ngDoCheck() {
    let amout = 0;
    let count = 0;
    //this.numberItem = this.numberItem + data.quantity;
    this.products.forEach(item => {
      count += item.quantity;
      amout += item.quantity * item.price;
    });
    this.numberItem = count;
    this.footerModel.subtotal = amout;
    this.footerModel.tax = amout * (10 / 100);
    
    //this.promoService.applyPromoCode(this.footerModel.promoCode, this.footerModel);

    this.footerModel.total =
      this.footerModel.subtotal + this.footerModel.tax - this.footerModel.discount;
  }

  onHandleRemoveProduct(id: number) {
    this.productService.removeProduct(id);
    //const index = this.products.findIndex(product => product.id === id);
    //const objec = this.products[index];
    //if (index !== -1) {
    //const objec = this.products[index];
    //this.products.splice(index, 1);
    //this.numberItem = this.numberItem - objec.quantity;
    //alert(objec);
    //}
  }

  onHandleChangeQuantity(data: Product) {
    //console.log("Quantiry old ", this.numberItem);
    this.numberItem = this.productService.changeQuantiryProduct();
    //for (let i = 0; i < this.products.length; ++i) {
    //this.numberItem += this.products[i].quantity;
    //this.footerModel.subtotal +=
    //  this.products[i].quantity * this.products[i].price;
    //this.footerModel.tax = this.footerModel.subtotal * 0.1;
    //this.footerModel.total = this.footerModel.subtotal + this.footerModel.tax;
    //}
    //console.log("Quantiry new ", data.quantity);
  }

  onPromoCode(code: string) {
    this.promoService.applyPromoCode(code, this.footerModel);
    //this.footerModel.total = this.footerModel.total - subnew;
    console.log(this.footerModel);
  }
}
