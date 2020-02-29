import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './pages/main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { MarketComponent } from './pages/market/market.component';
import { ProductsComponent } from './admin/catalog/products/products.component';
import { CategoryComponent } from './admin/catalog/category/category.component';
import { BrendsComponent } from './admin/catalog/brends/brends.component';
import { CategoryAddComponent } from './admin/catalog/category/category-add/category-add.component';
import { CategoryEditComponent } from './admin/catalog/category/category-edit/category-edit.component';
import { AccountComponent } from './pages/account/account.component';
import { IsLoggedIn } from './auth/isLogged.guard';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'catalog', component: MarketComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  {
    path: 'admin', component: AdminComponent, canActivate:[IsLoggedIn], children: [
      // { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent, canActivate:[IsLoggedIn] },
      { path: 'category', component: CategoryComponent, canActivate:[IsLoggedIn] },
      { path: 'category/add', component: CategoryAddComponent, canActivate:[IsLoggedIn] },
      { path: 'category/edit/:id', component: CategoryEditComponent, canActivate:[IsLoggedIn] },
      { path: 'brends', component: BrendsComponent, canActivate:[IsLoggedIn] },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
