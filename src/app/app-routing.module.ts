import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandaComponent } from './pages/banda/banda.component';
import { InfoDetalladaComponent } from './pages/info-detallada/info-detallada.component';

const routes: Routes = [
  {path:"", component: BandaComponent},
  {path:"info-detallada", component:InfoDetalladaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
