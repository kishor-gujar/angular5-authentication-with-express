import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { ProfileService } from './services/profile.service';
import { AuthGuard } from './services/login-auth-guard';
import { LoggedAuthGuard } from './services/logged-auth-guard';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthIntercepter } from './intercepters/auth.intercepter';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { AccountComponent } from './components/account/account.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoggedAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoggedAuthGuard]  },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: ProfileComponent },
      { path: 'addresses', component: AddressesComponent },
      { path: 'subscription', component: SubscriptionsComponent },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AddressesComponent,
    SubscriptionsComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepter,
      multi: true
    },
    AuthService, 
    ProfileService,
    LocalStorageService,
    AuthGuard,
    LoggedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
