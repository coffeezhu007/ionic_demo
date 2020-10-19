import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangerPagePageRoutingModule } from './danger-page-routing.module';

import { DangerPagePage } from './danger-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DangerPagePageRoutingModule
  ],
  declarations: [DangerPagePage]
})
export class DangerPagePageModule {}
