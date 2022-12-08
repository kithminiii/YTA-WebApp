import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PeopleRoutingModule } from './people-routing.module';
import { ProfileViewComponent } from './profile-view/profile-view.component';


@NgModule({
  declarations: [
    ProfileViewComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule
  ]
})
export class PeopleModule { }
