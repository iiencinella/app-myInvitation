import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

import * as crypto from 'crypto-js';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'mi-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent implements OnInit {

  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = "Hola Mundo!";
  aux = "";

  constructor() { }

  ngOnInit(): void {
  }

  printer() {
    const codeQR = document.getElementById("codeQR") || null;
    const WindowPrt = window.open('', '', 'left=0,top=50,width=900,height=900,toolbar=0,scrollbars=0,status=0') || null;
    if(WindowPrt !== null && codeQR !== null) {
      WindowPrt.document.write(codeQR.innerHTML);
      WindowPrt.document.write(this.aux);
      WindowPrt.document.close();
      WindowPrt.focus();
      WindowPrt.print();
    }
  }

  encrypt() {
    this.aux = this.value;
    this.value = crypto.AES.encrypt(this.aux, environment.keyText).toString();

    setTimeout(() => this.printer(), 2000);
  }
}
