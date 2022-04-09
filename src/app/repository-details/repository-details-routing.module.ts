import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryDetailsComponent } from './repository-details.component';

const routes: Routes = [{ path: '', component: RepositoryDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryDetailsRoutingModule { }
