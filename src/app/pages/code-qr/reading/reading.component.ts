import { Component, OnInit } from '@angular/core';

import * as crypto from 'crypto-js';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'mi-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

  value = "";
  listado: string[] = new Array();

  constructor() { }

  ngOnInit(): void {
  }

  scanSuccessHandle(e: any) {
    this.decrypt(e);
    setTimeout(() => alert(this.value), 500);
    this.listado.push(this.value);
  }

  decrypt(clave: string) {
    this.value = crypto.AES.decrypt(clave, environment.keyText).toString(crypto.enc.Utf8);
  }
}
