import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandaComponent } from './pages/banda/banda.component';
import { InfoDetalladaComponent } from './pages/info-detallada/info-detallada.component';
import {YouTubePlayer, YouTubePlayerModule} from '@angular/youtube-player';



@NgModule({
  declarations: [
    AppComponent,
    BandaComponent,
    InfoDetalladaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
