import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './medico/add/add.component';
import { ListarComponent } from './medico/listar/listar.component';
import { EditComponent } from './medico/edit/edit.component';
import { RemoveComponent } from './medico/remove/remove.component';
import {FormsModule} from '@angular/forms'
import {ServiceService} from '../app/Service/service.service'
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListarComponent,
    EditComponent,
    RemoveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
