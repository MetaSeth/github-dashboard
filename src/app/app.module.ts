import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarModule } from './search-bar/search-bar.module';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SearchBarModule, SharedModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
