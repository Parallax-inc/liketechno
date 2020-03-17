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
import { CategoryEditComponent } from './admin/catalog/category/category-edit/category-edit.component';
import { AccountComponent } from './pages/account/account.component';
import { IsLoggedIn } from './auth/isLogged.guard';
import { PreferenceComponent } from './admin/catalog/preference/preference.component';
import { ProdAddComponent } from './admin/catalog/products/prod-add/prod-add.component';
import { ProdEditComponent } from './admin/catalog/products/prod-edit/prod-edit.component';
import { ProdDetailsComponent } from './pages/prod-details/prod-details.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'catalog', component: MarketComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'details', component: ProdDetailsComponent },
  {
    path: 'admin', component: AdminComponent, canActivate:[IsLoggedIn], children: [
      // { path: '', redirectTo: 'products', pathMatch: 'full' },

      { path: 'products', component: ProductsComponent, canActivate:[IsLoggedIn] },
      { path: 'category', component: CategoryComponent, canActivate:[IsLoggedIn] },
      { path: 'category/edit/:id', component: CategoryEditComponent, canActivate:[IsLoggedIn] },
      { path: 'brends', component: BrendsComponent, canActivate:[IsLoggedIn] },
      { path: 'products', component: ProductsComponent },
      { path: 'products/add', component: ProdAddComponent },
      { path: 'products/edit/:id', component: ProdEditComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/edit/:id', component: CategoryEditComponent },
      { path: 'brends', component: BrendsComponent },
      { path: 'preference', component: PreferenceComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
