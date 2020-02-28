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

}
