import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebService } from 'src/app/shared/services/web.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  formData: any;
  constructor(private api: WebService) { }

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

    this.api.creatingCategory(data).subscribe((res: any) => {}, (err: any) => { console.log(err); })
    this.resetForm();
    delete data.id;
  }
}
