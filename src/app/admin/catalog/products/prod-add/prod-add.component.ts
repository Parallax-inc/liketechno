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
  preferenceArray = [];
  preferenceToSend = {};
  recomend: boolean = false;
  theBest: boolean = false;
  newer: boolean = false;

  arrayImgFiles = [];

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

  public createArrayPreference(cat) {
    this.preferenceArray = this.getCategoryArray.filter((elem) => {
      return elem.title == cat;
    })
    this.preferenceArray = this.preferenceArray[0].arrayPreference;
    console.log(this.preferenceArray);


  }
  addPdeferenceToObject(name, value) {
    if(value !== ''){
      this.preferenceToSend[`${name}`] = value;
    }
    console.log(this.preferenceToSend);

  }
  getBrends() {
    this.api.getBrends().subscribe((res) => {
      this.getBrendsArray = res as [];
    })

  }

  getCategory() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
    })
    console.log(this.getCategoryArray);

  }

  addImgToArrayToPost(files) {
    for (let img of files) {
      this.arrayImgFiles.push(img)
    }
  }
  preview(files) {
    this.addImgToArrayToPost(files);
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



  public onSubmit() {
    const data = new FormData();
    // const dataPref = new FormData();
    data.append('nameProd', this.nameProd);
    data.append('recomend', JSON.stringify(this.recomend));
    data.append('theBest', JSON.stringify(this.theBest));
    data.append('newer', JSON.stringify(this.newer));
    data.append('categoryes', this.categoryes);
    data.append('nameBrend', this.nameBrend);
    data.append('price', JSON.stringify(this.price));
    data.append('quantity', JSON.stringify(this.quantity));
    data.append('preference', JSON.stringify(this.preferenceToSend));
    // data.append('preference', this.preferenceToSend)
    // const preferences = []
    // for(let key in this.preferenceToSend){
    //   data.append(`${key}`, this.preferenceToSend[key])
    // }
    // data.append('preferences', dataPref)
    // data.append('preference', this.preferenceToSend)

    for (let img of this.arrayImgFiles) {
      data.append('images', img)
    }

    this.api.creatingProd(data).subscribe((res: any) => { }, (err: any) => { console.log(err); })


    // console.log(data);
    // setTimeout(() => {
    //   this.getBrends();
    // }, 500);


  }


}
