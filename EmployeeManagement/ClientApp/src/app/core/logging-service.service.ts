import { Injectable } from '@angular/core';
import { LogMessage } from '../model/log-message.model';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  public Info(message: string) {
    // tslint:disable-next-line:no-console
    console.info(message);
  }

  public Log(logMessage: LogMessage) {
    console.log(`Message: ${logMessage.message} \n Url: ${logMessage.url} \n Stacktrace: ${logMessage.stack}`);
  }
}
