import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/web.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  getCategoryArray = [];
  formData: any;
  constructor(private api: WebService) { }

  ngOnInit() {
    this.getCategory();
    this.resetForm();
  }

  public getCategory() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
    })
  }
  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      _id: null,
      title: ''
    }
  }
  public onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);

    this.api.creatingCategory(data).subscribe((res: any) => { }, (err: any) => { console.log(err); })
    this.resetForm();
    delete data.id;
    setTimeout(() => {
      this.getCategory();
    }, 500);

  }

  deleteCategory(id) {
    let delYes = confirm('Вы действительно хотите удалить?');
    if (delYes) {
      this.api.deleteCategory(id).subscribe((res: any) => { }, (err: any) => { console.log(err); })
    }
    setTimeout(() => {
      this.getCategory();
    }, 500);
  }
}
