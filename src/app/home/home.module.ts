import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import {MatListModule} from '@angular/material/list';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatListModule,

    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
