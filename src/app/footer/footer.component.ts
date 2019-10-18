import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  promoCode:string='';
  subtotal: number = 219799;
  tax: number = 709;
  total: number = 28979;
  constructor() {}

  ngOnInit() {}

  applyPromoCode(){
    console.log(this.promoCode);
  }
}
