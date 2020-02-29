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
  

  constructor(private api: WebService) { }

  ngOnInit() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
    })
  }

  preShowImg(files) {
    console.log(files[0]);
    let reader = new FileReader;
    let url = URL.createObjectURL(files[0]);
    console.log(url);
    url = url.slice(0,4)
    this.imgAddArray.push(url);
    console.log(this.imgAddArray);
    
    // reader.onload = function(e){
  
    //   console.log(blob.reader.result);
    // }
    // reader.readAsDataURL(files[0]);

    
    
  }
}
