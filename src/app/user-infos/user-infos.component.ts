import { Component, Input, OnInit } from '@angular/core';
import { UserInfos } from '../shared/models/user-infos.model';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss'],
})
export class UserInfosComponent implements OnInit {
  @Input() userInfos: UserInfos | undefined;
  constructor() {}

  ngOnInit(): void {}
}
