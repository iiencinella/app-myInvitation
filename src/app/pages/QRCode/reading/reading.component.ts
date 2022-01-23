import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scanSuccessHandle(e: any) {
    console.log(e);
  }
}
