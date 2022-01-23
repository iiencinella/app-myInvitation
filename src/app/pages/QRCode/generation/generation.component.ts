import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'mi-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent implements OnInit {

  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = "Hola Mundo!";

  constructor() { }

  ngOnInit(): void {
  }

  printer() {
    const codeQR = document.getElementById("codeQR") || null;
    const WindowPrt = window.open('', '', 'left=0,top=50,width=900,height=900,toolbar=0,scrollbars=0,status=0') || null;
    if(WindowPrt !== null && codeQR !== null) {
      WindowPrt.document.write(codeQR.innerHTML);
      WindowPrt.document.write(this.value);
      WindowPrt.document.close();
      WindowPrt.focus();
      WindowPrt.print();
    }
  }
}
