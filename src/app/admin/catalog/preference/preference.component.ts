import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/web.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {
  getCategoryArray = [];
  namePreference: string;
  categorys: string;
  // idCategory: string;
  formData: any;
  constructor(private api: WebService) { }

  ngOnInit() {
    this.getCategory();
  }
  getCategory() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
      console.log(this.getCategoryArray);

    })
  }

  // findIdCat(id) {
  //   let x = this.getCategoryArray.filter((e)=>{
  //     return e.title === id;
  //   })
  //   this.idCategory = x[0]._id;
  //   console.log(this.idCategory);

  // }
  
  public resetForm() {
    this.namePreference = "";
    this.categorys = "";
  }

  public onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    // data['_idCategory']=`${this.idCategory}`;
    console.log(data);

    this.api.creatingPreference(this.categorys, data).subscribe((res: any) => { }, (err: any) => { console.log(err); })
    this.resetForm();
    delete data.id;
  }

  deletePreference(id, name) {
    let delYes = confirm('Вы действительно хотите удалить свойство?');
    if (delYes) {
      this.api.deletePreference(id, name).subscribe((res: any) => { }, (err: any) => { console.log(err); })
    }
  }
}
