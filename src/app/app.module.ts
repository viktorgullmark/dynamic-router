import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CanActivateMain } from './guards/main.guard';
import { MainRootModule } from './routes/main/main-root.module';
import { ConfigService } from './services/config-service/config.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MainRootModule,
  ],
  providers: [
    CanActivateMain,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
