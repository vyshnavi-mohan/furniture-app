import { NgModule } from '@angular/core';

import { HomeComponent } from './page/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '@shared/shared.module';




@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,

        HomeRoutingModule
    ],

})
export class HomeModule {}
