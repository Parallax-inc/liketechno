import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  showMore: boolean = true;

  constructor() { }


  ngOnInit() {
  }

  public clickMore(): void {
    console.log('dfghnm,');
  }

}
