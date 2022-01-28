import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeQRRoutingModule } from './code-qr-routing.module';
import { CodeQRComponent } from './code-qr.component';
import { GenerationComponent } from './generation/generation.component';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ReadingComponent } from './reading/reading.component';


@NgModule({
  declarations: [
    CodeQRComponent,
    GenerationComponent,
    ReadingComponent
  ],
  imports: [
    CommonModule,
    CodeQRRoutingModule,
    FormsModule,
    NgxQRCodeModule,
    ZXingScannerModule
  ]
})
export class CodeQRModule { }
