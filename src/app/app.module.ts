import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'; 

//# app Routes
import { appRoutes } from './routes';

// fetures moudles 
import { HomeMoudle } from './home/home.module';
import { DetailsMoudle } from './details/details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeMoudle,
    DetailsMoudle,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}