// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserProfileComponent} from './user-profile/user-profile.component';
import { DailyLogsComponent } from './daily-logs/daily-logs.component';

// navbars

// Components Routing
import { UsersRoutingModule} from './users-routing.module';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { PersonalReportsComponent } from './personal-reports/personal-reports.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    TabsModule,

  ],
  declarations: [
    UserProfileComponent,
    DailyLogsComponent,
    PersonalReportsComponent,

  ]
})


export class UsersModule { }
