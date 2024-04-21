import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule {}
