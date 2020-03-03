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
  formData: any;
  constructor(private api: WebService) { }

  ngOnInit() {
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
    console.log(form);
    console.log(data);
    
    this.api.creatingPreference(data).subscribe((res: any) => {}, (err: any) => { console.log(err); })
    this.resetForm();
    delete data.id;
  }
}
