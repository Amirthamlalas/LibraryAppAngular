import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EdiBookComponent } from './edi-book/edi-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { NavbarComponent } from './navbar/navbar.component';

const myroute:Routes =[

  {
    path :"",
    component : AdminLoginComponent
  },
  {
    path :"register",
    component : UserRegistrationComponent
  },
  {
    path :"login",
    component : UserLoginComponent
  },
  {
    path :"entry",
    component : BookEntryComponent
  },
  {
    path :"search",
    component : SearchBookComponent
  },
  {
    path :"edit",
    component : EdiBookComponent
  },
  {
    path :"delete",
    component : DeleteBookComponent
  },
  {
    path :"issue",
    component : IssueBookComponent
  },
  {
    path :"view",
    component : ViewBookComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    BookEntryComponent,
    ViewBookComponent,
    DeleteBookComponent,
    EdiBookComponent,
    IssueBookComponent,
    SearchBookComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function forRoot(myroute: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

