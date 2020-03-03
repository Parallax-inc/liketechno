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
  categorys: string = "select";
  formData: any;
  constructor(private api: WebService) { }

  ngOnInit() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
    })
  }

  public resetForm() {
    this.namePreference = "";
    this.categorys = "";
  }

  public onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);

    this.api.creatingPreference(data).subscribe((res: any) => { }, (err: any) => { console.log(err); })
    this.resetForm();
    delete data.id;
  }

  deletePreference(id) {
    let delYes = confirm('Вы действительно хотите удалить?');
    if (delYes) {
      this.api.deletePreference(id).subscribe((res: any) => { }, (err: any) => { console.log(err); })
    }
  }
}
