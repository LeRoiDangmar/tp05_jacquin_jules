import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page.component';
import { FeaturedComponent } from './featured/featured.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent }, // Default route for this submodule
  { path: 'details', component: FeaturedComponent }, // Additional routes if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontPageRoutingModule { }
