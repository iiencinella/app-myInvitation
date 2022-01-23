import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationComponent } from './pages/QRCode/generation/generation.component';
import { ReadingComponent } from './pages/QRCode/reading/reading.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'generate' },
  { path: 'generate', component: GenerationComponent },
  { path: 'reading', component: ReadingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
