import {Http,Response} from '@angular/http';
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LogTailService{

    http:Http;

    constructor(http:Http){
      this.http = http;
    }

    getLogEntries(): Observable<any> {
      return this.http.get('/api/log.json').map((res: Response) => res.json());
    }
}