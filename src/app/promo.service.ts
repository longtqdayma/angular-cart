import { Injectable } from "@angular/core";
import { FooterModel } from "./footer.model";

@Injectable({
  providedIn: "root"
})
export class PromoService {
  constructor() {}

  applyPromoCode(code: string, footetModel: FooterModel) {

    if (code.trim() === "EVN") {
      footetModel.discount = footetModel.total * (15 / 100);
    }else {
      footetModel.discount = 0;
    }
   
  }
}
