import { Component, OnInit,Input } from "@angular/core";
import { FooterModel } from '../footer.model';


@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  @Input() footerModel : FooterModel;
  // promoCode:string='';
  // subtotal: number = 219799;
  // tax: number = 709;
  // total: number = 28979;
  constructor() {}

  ngOnInit() {}

  applyPromoCode(){
    console.log(this.footerModel.promoCode);
  }
}
