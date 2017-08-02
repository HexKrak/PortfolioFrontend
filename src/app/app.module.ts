// Core angular2 components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular material components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdCardModule,
  MdMenuModule,
  MdInputModule,
  MdButtonModule,
  MdGridListModule,
  MdListModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTooltipModule,
  MdDialogModule,
  MdTabsModule
} from '@angular/material';

// import routing
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { CodePhilosophyComponent } from './code-philosophy/code-philosophy.component';

import {
  CovalentLayoutModule,
  CovalentMenuModule,
  CovalentStepsModule
} from '@covalent/core';

import { CovalentHttpModule } from '@covalent/http';

// hammer js is required by some angular components
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    PortfolioComponent,
    NotFoundComponent,
    SkillsComponent,
    HobbiesComponent,
    CodePhilosophyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentStepsModule,
    CovalentHttpModule,
    MdCardModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    MdGridListModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule,
    MdDialogModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }