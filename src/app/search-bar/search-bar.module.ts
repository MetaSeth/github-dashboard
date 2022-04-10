import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, RouterModule, FormsModule, SharedModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
