import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { ServerListComponent } from './servers/server-list/server-list.component';
import { ServersService } from './servers.service';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'servers', component:ServersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServersComponent,
    ServerListComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
