import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserInfosModule } from '../user-infos/user-infos.module';
import { SearchBarRoutingModule } from './search-bar-routing.module';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UserInfosModule,
    SearchBarRoutingModule,
  ],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
