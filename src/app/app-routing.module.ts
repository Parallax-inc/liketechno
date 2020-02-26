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
  // {
  //   path: 'admin', component: AdminComponent, canActivate:[IsLoggedIn] , children: [
  //     { path: '', redirectTo: 'portrait', pathMatch: 'full' },
  //     { path: 'portrait', component: AdminPortraitComponent, canActivate: [IsLoggedIn] },
  //     { path: 'list-project', component: AdminListProjectComponent, canActivate: [IsLoggedIn] },
  //     { path: 'response', component: AdminResponseComponent, canActivate: [IsLoggedIn] },
  //     { path: 'team', component: AdminTeamComponent, canActivate: [IsLoggedIn] },
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
