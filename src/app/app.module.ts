import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditableSvgComponent } from './editable-svg/editable-svg.component';
import { editableSvgReducer } from './editable-svg/store/editable-svg.reducer';


@NgModule({
  declarations: [
    AppComponent,
    EditableSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ editableSvg: editableSvgReducer })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
