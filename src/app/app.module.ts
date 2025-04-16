import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { ContactComponent } from './modules/contact/contact.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { WebapplicationsComponent } from './modules/webapplications/webapplications.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SkillsComponent,
    WebapplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
