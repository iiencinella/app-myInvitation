import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerationComponent } from './generation/generation.component';
import { ReadingComponent } from './reading/reading.component';

const routes: Routes = [
  { path: 'code', pathMatch: 'full', redirectTo: 'code/generate' },
  { path: 'code/generate', pathMatch: 'full', redirectTo: '/generate' },
  { path: 'code/reading', pathMatch: 'full', redirectTo: '/reading' },
  { path: 'generate', component: GenerationComponent },
  { path: 'reading', component: ReadingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeQRRoutingModule { }
