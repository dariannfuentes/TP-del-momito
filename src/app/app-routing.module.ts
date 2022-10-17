import { Componente4Component } from './componentes/INFORMACION/componente4.component';
import { Componente3Component } from './componentes/ACERCA DE/componente3.component';
import { Componente2Component } from './componentes/PRODUCTO/componente2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componentes/INICIO/componente1.component';


const routes: Routes = [

{path:"comp1", component: Componente1Component},
{path:"comp2", component: Componente2Component},
{path:"comp3", component:Componente3Component},
{path:"comp4",component:Componente4Component},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
