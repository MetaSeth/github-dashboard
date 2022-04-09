import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  throwError,
} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { UserInfos } from '../models/user-infos.model';

const URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUserInfos(username: string) {
    return this.http.get(`${URL}/users/${username}`);
  }

  getUserRepos(username: string) {
    return this.http.get(`${URL}/users/${username}/repos`);
  }
}
