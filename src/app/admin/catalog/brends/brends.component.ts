import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebService } from 'src/app/shared/services/web.service';

@Component({
  selector: 'app-brends',
  templateUrl: './brends.component.html',
  styleUrls: ['./brends.component.css']
})
export class BrendsComponent implements OnInit {
  logo_img: any;
  message: string;
  fileImg: any;
  typeFileImg: any;
  formData: any;
  nameBrends: string;
  getBrendsArray = [];
  constructor(private api: WebService) { }

  ngOnInit() {
    this.getBrends();
  }
  getBrends(){
    this.api.getBrends().subscribe((res) => {
      this.getBrendsArray = res as [];
    })
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
      this.logo_img = reader.result;
    }

    this.fileImg = files[0];
    this.typeFileImg = mimeType;
    // 
  }

  // public resetForm(form?: NgForm) {
  //   if (form != null) {
  //     form.resetForm();
  //   }
  //   this.formData = {
  //     _id: null,
  //     title: ''
  //   }
  // }

  public onSubmit() {
    let data: any = new FormData();
    data.append('logo_img', this.fileImg);
    data.append('nameBrends', this.nameBrends);
    this.api.creatingBrends(data).subscribe((res: any) => { }, (err: any) => { console.log(err); })

    setTimeout(() => {
      this.getBrends();
    }, 500);
    console.log(data);
    

  }

  deleteBrend(id) {
    let delYes = confirm('Вы действительно хотите удалить?');
    if (delYes) {
      this.api.deleteBrend(id).subscribe((res: any) => { }, (err: any) => { console.log(err); })
    }
    setTimeout(() => {
      this.getBrends();
    }, 500);
  }


}
