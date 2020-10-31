import { NgModule } from '@angular/core';
import {MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const MaterialComponents=[
                         MatCardModule ,
                         MatGridListModule,
                         MatBadgeModule,
                         MatButtonModule,
                         MatIconModule
                         ];
@NgModule({
  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
