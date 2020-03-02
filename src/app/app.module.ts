import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './pages/main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { MarketComponent } from './pages/market/market.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './admin/catalog/products/products.component';
import { CategoryComponent } from './admin/catalog/category/category.component';
import { BrendsComponent } from './admin/catalog/brends/brends.component';
import { OrdersListComponent } from './admin/orders/orders-list/orders-list.component';
import { CategoryAddComponent } from './admin/catalog/category/category-add/category-add.component';
import { CategoryEditComponent } from './admin/catalog/category/category-edit/category-edit.component';
import { AccountComponent } from './pages/account/account.component';
import { IsLoggedIn } from './auth/isLogged.guard';
import { AuthService } from './shared/services/auth.service'
import { PreferenceComponent } from './admin/catalog/preference/preference.component';
import { ProdAddComponent } from './admin/catalog/products/prod-add/prod-add.component';
import { ProdEditComponent } from './admin/catalog/products/prod-edit/prod-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    MainComponent,
    ContactsComponent,
    AboutComponent,
    MarketComponent,
    ServicesComponent,
    ProductsComponent,
    CategoryComponent,
    BrendsComponent,
    OrdersListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    AccountComponent,
    PreferenceComponent,
    ProdAddComponent,
    ProdEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    CKEditorModule
  ],
  providers: [IsLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
