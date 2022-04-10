import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, ReplaySubject } from 'rxjs';
import { UserInfos } from '../models/user-infos.model';

const URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private _userinfos = new ReplaySubject<UserInfos>(1);

  constructor(private http: HttpClient) {}

  get userinfos() {
    return this._userinfos.asObservable();
  }
  getUserInfosByUsername(username: string) {
    forkJoin({
      userInfo: this.http.get(`${URL}/users/${username}`),
      userRepo: this.http.get(`${URL}/users/${username}/repos`),
    }).subscribe((result: any) => {
      this._userinfos.next({
        username: result.userInfo['login'],
        name: result.userInfo['name'],
        avatarUrl: result.userInfo['avatar_url'],
        repositorys: result.userRepo.reduce((acc: any, repo: any) => {
          acc[repo.name] = {
            name: repo.name,
            language: repo.language,
            stars: repo.stargazers_count,
            description: repo.description,
            creationDate: new Date(repo.created_at),
            updateDate: new Date(repo.updated_at),
            url: repo.html_url,
          };
          return acc;
        }, {}),
      });
    });
  }
}
