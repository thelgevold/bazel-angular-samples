import {Http, Response} from '@angular/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AddressBookService {

    http:Http;
    constructor(http:Http){
        console.log('Creating AddressBookService');
        this.http = http;
    }

    getEntries(): Observable<any> {
      return this.http.get('/api/people.json').map((res: Response) => res.json());
    }

}