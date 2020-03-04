import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/web.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgForm } from '@angular/forms';

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

  getBrendsArray = [];
  imgAddArray = [];
  fileToUpload: File = null;

  message: string;

  nameProd: string;
  categoryes: string;
  nameBrend: string;
  price: number;
  quantity: number;
  constructor(private api: WebService) { }

  ngOnInit() {
    this.getBrends();
    this.getCategory();
  }

  getBrends() {
    this.api.getBrends().subscribe((res) => {
      this.getBrendsArray = res as [];
    })
    console.log(this.getBrendsArray);

  }

  getCategory() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
    })
    console.log(this.getCategoryArray);

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
  }



  public onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    data['images'] = this.imgAddArray;
    this.api.creatingProd(data).subscribe((res: any) => { }, (err: any) => { console.log(err); })


    console.log(data);
    // setTimeout(() => {
    //   this.getBrends();
    // }, 500);

  }
}
