import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { We7RouterModule } from 'meepo-we7-router';
import { AppComponent } from './app.component';
import { routes, components } from './routes';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    We7RouterModule.forRoot(routes),
    SharedModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    ...components
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
