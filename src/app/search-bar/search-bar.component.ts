import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map, mergeMap } from 'rxjs';
import { UserInfos } from '../shared/models/user-infos.model';
import { GithubService } from '../shared/services/github.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  username: string = '';
  userinfos?: UserInfos;

  constructor(private github: GithubService, private router: Router) {}

  ngOnInit(): void {}

  searchUserInfos() {
    forkJoin({
      userInfo: this.github.getUserInfos(this.username),
      userRepo: this.github.getUserRepos(this.username),
    }).subscribe((result: any) => {
      this.userinfos = {
        name: result.userInfo['name'],
        avatarUrl: result.userInfo['avatar_url'],
        repositorys: result.userRepo.map(
          ({
            name,
            language,
            stargazers_count,
            description,
            created_at,
            updated_at,
            html_url,
          }: {
            name: string;
            language: string;
            stargazers_count: number;
            description: string;
            created_at: Date;
            updated_at: Date;
            html_url: string;
          }) => {
            return {
              name: name,
              language: language,
              stars: stargazers_count,
              description: description,
              creationDate: new Date(created_at),
              updateDate: new Date(updated_at),
              url: html_url,
            };
          }
        ),
      };
    });
  }
}
