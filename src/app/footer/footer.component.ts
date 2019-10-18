import { Component, OnInit } from "@angular/core";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/vi';
registerLocaleData(localeFr, 'vi');

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  subtotal: number = 219799;
  tax: number = 709;
  total: number = 28979;
  constructor() {}

  ngOnInit() {}
}
