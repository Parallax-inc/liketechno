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
    return this.webService.post('api/category', data)
  }
}
