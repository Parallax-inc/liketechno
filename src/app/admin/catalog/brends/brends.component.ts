import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brends',
  templateUrl: './brends.component.html',
  styleUrls: ['./brends.component.css']
})
export class BrendsComponent implements OnInit {
  imgBrand: any;
  message: string;
  constructor() { }

  ngOnInit() {
  }

  preview(files) {
    if (files.length === 0)
      return;
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "файл не являются изображениями.";
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.imgBrand = reader.result;
    }
  }


}
