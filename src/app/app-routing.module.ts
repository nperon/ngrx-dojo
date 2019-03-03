import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditableSvgComponent } from './editable-svg/editable-svg.component';

const routes: Routes = [
  { path: '', component: EditableSvgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
