import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { BgService } from './bg.service';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private webService: BgService) { }

  creatingCategory(data: string) {
    return this.webService.post('api/category/add', data)
  }
  getCategory() {
    return this.webService.get('api/category');
  }
  getCategoryByID(id: string){
    return this.webService.get(`api/category/edit/${id}`);
  }
  updateCategoryByID(id: string, response: string) {
    return this.webService.patch(`api/category/edit-update/${id}`, response );
  }

  // account
  creatingUsers(data: string) {
    return this.webService.post('api/users/register', data)
  }
  getUserByID(id: string){
    return this.webService.get(`api/users/s/${id}`);
  }

  creatingBrends(data: any) {
    return this.webService.post('api/brends/add', data)
  }
  getBrends() {
    return this.webService.get('api/brends');
  }
  deleteBrend(id: string) {
    return this.webService.delete(`api/brends/${id}`);
  }

 
  creatingPreference(name,data: any) {
    return this.webService.patch(`api/category/preference/creating/${name}`, data);
  }

  deletePreference(id: string, data: any) {
    return this.webService.patch(`api/category/preference/delete/${id}`, data);
    
  }

  creatingProd(data: any) {
    return this.webService.post('api/goods/add', data)
  }


}
