import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { LoggingServiceService } from './logging-service.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import  * as StackTrace  from 'stacktrace-js';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    const loggingService = this.injector.get(LoggingServiceService);
    const location = this.injector.get(LocationStrategy);
    const message = error.message ? error.message : error.toString();

    const url = location instanceof PathLocationStrategy
      ? location.path() : '';

   // get the stack trace, lets grab the last 10 stacks only
    //StackTrace.fromError(error).then(stackframes => {
    //  const stackString = stackframes
    //    .splice(0, 20)
    //    .map(function(sf) {
    //      return sf.toString();
    //    }).join('\n');

    //// log on the server
      
    //});

    loggingService.Log({ message, url, stack: "" });
    
  }

  constructor(private readonly injector: Injector) { }
}
