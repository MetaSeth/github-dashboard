import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfos } from '../shared/models/user-infos.model';
import { GithubService } from '../shared/services/github.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss'],
})
export class UserInfosComponent implements OnInit {
  userInfos: Observable<UserInfos>;
  constructor(
    private githubService: GithubService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userInfos = this.githubService.userinfos;
  }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.params['username'];

    this.githubService.getUserInfosByUsername(username);

    // this.githubService.userinfos.subscribe(
    //   (userinfos) => (this.userInfos = userinfos)
    //   );
  }
}
