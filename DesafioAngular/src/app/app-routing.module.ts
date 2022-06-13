import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosComponent } from './paginas/dados/dados.component';
import { GraficoComponent } from './paginas/grafico/grafico.component';

const routes: Routes = [
  { path: 'grafico', component: GraficoComponent },
  { path: 'dados', component: DadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
