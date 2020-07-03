import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';
import { FashionComponent } from './fashion/fashion.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TravelComponent } from './travel/travel.component';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'fashion', component: FashionComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CategoriesComponent,
    FilterPipe,
    FashionComponent,
    AboutComponent,
    ContactComponent,
    TravelComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
