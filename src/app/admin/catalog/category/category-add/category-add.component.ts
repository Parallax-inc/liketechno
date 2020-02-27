import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  formData: any;
  constructor() { }

  ngOnInit() {
    this.resetForm();
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

    // this.api.postTeam(formDataImg).subscribe((res: any) => {
    //   this.refreshDate();
    //   (<HTMLInputElement>window.document.getElementById('file')).value = "";
    // }, (err: any) => { console.log(err); })
    this.resetForm();
    delete data.id;
  }
}
