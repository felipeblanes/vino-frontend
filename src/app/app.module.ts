import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VideoStreamingComponent } from './video-streaming/video-streaming.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'video-streaming', component: VideoStreamingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideoStreamingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
