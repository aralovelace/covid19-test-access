import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {UsersListComponent} from './users-list/users-list.component';
import { UserTestComponent} from './user-test/user-test.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Manage'
    },
    children: [
      {
        path: 'users-list',
        component: UsersListComponent,
        data: {
          title: 'Users List'
        },
      },
      {
        path: 'user/:id',
        children: [
          {
            path: 'test',
            component: UserTestComponent,
            data: {
              title: 'User\'s Test'
            },
          }
        ]
      }

    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {}
