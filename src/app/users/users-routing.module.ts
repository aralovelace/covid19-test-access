import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {NgModule} from '@angular/core';
import {DailyLogsComponent} from './daily-logs/daily-logs.component';
import {PersonalReportsComponent} from './personal-reports/personal-reports.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: 'user-profile',
        component: UserProfileComponent,
        data: {
          title: 'User Profile'
        }
      },
      {
        path: 'log',
        component: DailyLogsComponent,
        data: {
          title: 'Daily Logs'
        }
      },
      {
        path: 'report',
        component: PersonalReportsComponent,
        data: {
          title: 'Personal Report'
        }
      },
    ]

  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

