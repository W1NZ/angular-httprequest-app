import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageContentComponent } from './page-content/page-content.component';

const routes: Routes = [
  { path: '', component: PageContentComponent },
  { path: 'subpage', component: PageContentComponent },
  { path: 'about', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
