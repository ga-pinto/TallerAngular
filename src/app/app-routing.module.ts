import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './series/components/series-list/series-list.component'; // Importa el componente

const routes: Routes = [
  { path: '', component: SeriesListComponent } // Configura la ruta principal para SeriesListComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
