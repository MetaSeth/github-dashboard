import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfosComponent } from './user-infos.component';

@NgModule({
  declarations: [UserInfosComponent],
  imports: [CommonModule],
  exports: [UserInfosComponent],
})
export class UserInfosModule {}
