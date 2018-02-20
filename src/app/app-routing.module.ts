import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { UserlistComponent } from './userlist/userlist.component';
import { JsontryComponent } from './jsontry/jsontry.component';

const routes: Routes = [
  {
    path: 'form',
    component: TestComponent
  },
  {
    path: 'userlist',
    component: UserlistComponent
  },
  {
    path: 'json',
    component: JsontryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
