import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditableSvgComponent } from './editable-svg/editable-svg.component';
import { editableSvgReducer } from './editable-svg/store/editable-svg.reducer';
import { HttpClientModule } from '@angular/common/http';
import { WordEffects } from './editable-svg/store/words.effects'; 

@NgModule({
  declarations: [
    AppComponent,
    EditableSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ editableSvg: editableSvgReducer }),
    EffectsModule.forRoot([WordEffects])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
