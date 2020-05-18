
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ManageRoutingModule} from './manage-routing.module';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {UsersListComponent} from './users-list/users-list.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {PopoverModule} from 'ngx-bootstrap/popover';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { UserTestComponent } from './user-test/user-test.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ManageRoutingModule,
    TabsModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()


  ],
  declarations: [
    UsersListComponent,
    UserTestComponent
  ]
})


export class ManageModule { }
