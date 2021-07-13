import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { PersonListComponent } from './component/person-list/person-list.component';
import { PersonBySkillListComponent } from './component/person-by-skill-list/person-by-skill-list.component';
import { PersonComponent } from './component/person/person.component';
import { SkillComponent } from './component/skill/skill.component';
import { LevelComponent } from './component/level/level.component';
import { PersonSkillComponent } from './component/person-skill/person-skill.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './component/main/main.component';
import { SimpleCORSFilterComponent } from './simple-corsfilter/simple-corsfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonBySkillListComponent,
    PersonComponent,
    SkillComponent,
    LevelComponent,
    PersonSkillComponent,
    MainComponent,
    SimpleCORSFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
