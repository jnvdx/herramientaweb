import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MruaComponent } from './mrua/mrua.component';
import { TiroParabolicoComponent } from './tiro-parabolico/tiro-parabolico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MruaComponent,
    TiroParabolicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
