import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './core/components/views/basic/basic.component';

import { MenuBubbleComponent } from './core/components/views/menu-bubble/menu-bubble.component';


const routes: Routes = [
  {
    path: 'menu-basic',
    component: BasicComponent,
  },
  {
    path: 'menu-bubble',
    component: MenuBubbleComponent,
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }