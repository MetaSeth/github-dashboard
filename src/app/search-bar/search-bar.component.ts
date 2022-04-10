import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../shared/services/github.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  username: string = '';

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}
  getUserInfos() {
    this.githubService.getUserInfosByUsername(this.username);
  }
}
