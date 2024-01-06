import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: PageContentComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'about', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
