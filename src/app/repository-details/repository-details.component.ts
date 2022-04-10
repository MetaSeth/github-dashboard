import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../shared/models/repository.model';
import { GithubService } from '../shared/services/github.service';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss'],
})
export class RepositoryDetailsComponent implements OnInit {
  details?: Repository;
  constructor(
    private githubService: GithubService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const repoName = this.activatedRoute.snapshot.params['repo'];
    this.githubService.userinfos.subscribe((userInfo: any) => {
      this.details = userInfo.repositorys[repoName];
    });
  }
}
