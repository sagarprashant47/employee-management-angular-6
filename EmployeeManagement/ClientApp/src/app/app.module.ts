import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { CoreModule } from './core/core.module';
import { HighlightEmployeeDirective } from './employee/highlight-employee.directive';
import { GlobalErrorHandlerService } from './core/global-error-handler.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    HighlightEmployeeDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ], {
        enableTracing: false
    }),
    BrowserAnimationsModule,
    DepartmentModule,
    EmployeeModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandlerService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
