import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { NewEquipmentComponent } from './new-equipment/new-equipment.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SearchComponent } from './search/search.component';
import { RentalsComponent } from './rentals/rentals.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'userlist',
    component: UserlistComponent
  },
  {
    path: 'new-equipment',
    component: NewEquipmentComponent
  },
  {
    path: 'equipments/:id',
    component: UserDetailComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'rentals',
    component: RentalsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent,
    UserlistComponent,
    NewEquipmentComponent,
    UserDetailComponent,
    SearchComponent,
    RentalsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOsph-vLUx4IDAKQoJT_NeVd6vDWJ44oQ'
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
