import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SoatBtczProvider {

  baseUrl = 'http://zcash.sonofatech.com/api'

  constructor(public http: HttpClient) {
    console.log('Hello SoatBtczProvider Provider');
  }

  getPoolInfo() {
    let url = `${this.baseUrl}/pool_stats`
    return this.http.get(url)
      .map(res => res)
  }

}
