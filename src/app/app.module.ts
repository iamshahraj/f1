import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserlistComponent } from './userlist/userlist.component';
import { JsontryComponent } from './jsontry/jsontry.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserlistComponent,
    JsontryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
