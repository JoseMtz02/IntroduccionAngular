import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/dbz/list/list.component';
import { FormularioComponent } from './components/formulario/addcharacter.component';

/* import { ListComponent } from '../heroes/list/list.component';
 */


@NgModule({
  declarations: [
    MainPageComponent,
    FormularioComponent,
    ListComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
