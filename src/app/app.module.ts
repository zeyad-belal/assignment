import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BidiModule } from '@angular/cdk/bidi';
import { UserDataComponent } from './user-data/user-data.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    UserDataComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    BidiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
