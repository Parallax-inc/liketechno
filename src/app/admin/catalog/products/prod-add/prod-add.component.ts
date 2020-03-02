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
  shortDescriptionProd: string = "";
  fullDescriptionProd: string = "";
  getCategoryArray = [];

  imgAddArray = [];
  fileToUpload: File = null;

  message: string;
  constructor(private api: WebService) { }

  ngOnInit() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
    })
  }

  preview(files) {
    if (files.length === 0)
      return;


    for (let i = 0; i < files.length; i++) {
      setTimeout(() => {
        let mimeType = files[i].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = "один или нескольо файлов не являются изображениями.";
          return;
        }
        let reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = (e) => {
          this.imgAddArray.push(reader.result)
        }
      }, 0);

    }





    console.log(this.imgAddArray);

  }
}
