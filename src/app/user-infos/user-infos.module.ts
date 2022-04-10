import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfosComponent } from './user-infos.component';
import { UserInfosRoutingModule } from './user-infos-routing.module';

@NgModule({
  declarations: [UserInfosComponent],
  imports: [CommonModule, UserInfosRoutingModule],
  exports: [UserInfosComponent],
})
export class UserInfosModule {}
