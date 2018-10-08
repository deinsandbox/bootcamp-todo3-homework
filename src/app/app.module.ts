import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { CountPipe } from './count.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteDirective } from './delete.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CountPipe,
    DeleteDirective
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
