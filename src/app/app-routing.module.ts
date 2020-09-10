import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEnrolleeComponent } from './add-enrollee/add-enrollee.component';
import { ViewEnrolleeComponent } from './view-enrollee/view-enrollee.component';


const routes: Routes = [
  { path: 'add', component: AddEnrolleeComponent },
  { path: 'view', component: ViewEnrolleeComponent },
  { path: '',   redirectTo: '/view', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: ViewEnrolleeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
