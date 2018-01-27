import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';

@Injectable()
export class GithubUsersProvider {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: HttpClient) {}

  load() : Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map(res => res as User[] || []);
  }

  loadDetails(login: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${login}`)
      .map(res => res as User || null)
  }

}
