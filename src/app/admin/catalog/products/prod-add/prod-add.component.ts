import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/web.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.css']
})
export class ProdAddComponent implements OnInit {
  Editor = ClassicEditor;
  shortDescriptionProd: string;
  fullDescriptionProd: string;
  getCategoryArray = [];

  imgAddArray = [];
  fileToUpload: File = null;

  public imagePath;
  imgURL: any;
  public message: string;
  constructor(private api: WebService) { }

  ngOnInit() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
    })
  }

  preview(files) {
    if (files.length === 0)
      return;
      var filesAmount = files.length;
      
    for (let i = 0; i < filesAmount; i++) {
      // setTimeout(() => {
        var reader = new FileReader();
      // this.imagePath = files;
      
      reader.onloadend = (event) => {
        this.imgURL = reader.result;
        this.imgAddArray.push(reader.result)
        console.log(reader.result);
      }
      reader.readAsDataURL(files[i]);
      // }, 100);
      // debugger
      // var mimeType = files[i].type;
      // if (mimeType.match(/image\/*/) == null) {
      //   this.message = "Only images are supported.";
      //   return;
      // }

      
      
    }





    console.log(this.imgAddArray);

  }
}
