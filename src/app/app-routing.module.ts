import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostalEntryComponent } from './postal-entry/postal-entry.component';

const routes: Routes = [
  { path: '', component: PostalEntryComponent },
  { path: ':stub', component: PostalEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
