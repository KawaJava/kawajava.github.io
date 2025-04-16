import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { ContactComponent } from './modules/contact/contact.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { WebapplicationsComponent } from './modules/webapplications/webapplications.component';
import { LegacyapplicationsComponent } from './modules/legacyapplications/legacyapplications.component';
import { KbeapplicationsComponent } from './modules/kbeapplications/kbeapplications.component';
import { Games2dComponent } from './modules/games2d/games2d.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SkillsComponent,
    WebapplicationsComponent,
    LegacyapplicationsComponent,
    KbeapplicationsComponent,
    Games2dComponent
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
