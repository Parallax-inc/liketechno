import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { WebService } from 'src/app/shared/services/web.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  formData: any;
  category = [];
  constructor(private api: WebService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.resetForm();
    this.loadedCategory();
  }

  loadedCategory(){
    this.api.getCategoryByID(this.route.snapshot.params['id']).subscribe((res: any) => {
      this.category = res;
      this.formData.title = res.title;
    }, err => { console.log(err); });
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

    this.api.updateCategoryByID(this.route.snapshot.params['id'], data).subscribe((res: any) => {}, (err: any) => { console.log(err); });
    this.resetForm();
    delete data.id;
  }
}
