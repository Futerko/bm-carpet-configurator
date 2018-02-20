import { CarpetService } from './services/carpet.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzSwitchModule, MzButtonModule, MzNavbarModule, MzInputModule, MzIconMdiModule, MzIconModule, MzSidenavModule, MzParallaxModule, MzCollapsibleModule, MzCardModule, MaterializeModule, MzSpinnerModule, MzModalModule, MzToastService, MzToastModule, MzInjectionModule, MzValidationModule, MzRadioButtonModule, MzSelectModule } from 'ng2-materialize';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzNavbarModule,
    MzInputModule,
    MzIconModule,
    MzIconMdiModule,
    MzSidenavModule,
    MzParallaxModule,
    MzCollapsibleModule,
    MzCardModule,
    MzSpinnerModule,
    MzModalModule,
    MzToastModule,
    MzInjectionModule,
    MzValidationModule,
    MzSwitchModule,
    MzRadioButtonModule,
    MzSelectModule,
    FormsModule
  ],
  providers: [CarpetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
