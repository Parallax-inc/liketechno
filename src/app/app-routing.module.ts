import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './pages/main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { MarketComponent } from './pages/market/market.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'catalog', component: MarketComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin', component: AdminComponent, children: [
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
