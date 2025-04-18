import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { WebapplicationsComponent } from './modules/webapplications/webapplications.component';
import { KbeapplicationsComponent } from './modules/kbeapplications/kbeapplications.component';
import { LegacyapplicationsComponent } from './modules/legacyapplications/legacyapplications.component';
import { Games2dComponent } from './modules/games2d/games2d.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'umiejetnosci', component: SkillsComponent},
      {path: 'kontakt', component: ContactComponent},
      {path: 'aplikacjekbe', component: KbeapplicationsComponent},
      {path: 'aplikacjewebowe', component: WebapplicationsComponent},
      {path: 'gry2d', component: Games2dComponent},
      {path: 'starszeprojekty', component: LegacyapplicationsComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
