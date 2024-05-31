import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule} from '@angular/material/card'
import { MatButtonModule} from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule} from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PartyDetailsFormComponent } from './views/party-details-form/party-details-form.component';
import { PartyDetailsListComponent } from './views/party-details-list/party-details-list.component';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartyDetailsFormComponent,
    PartyDetailsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi : true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
