import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, SearchBarModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
