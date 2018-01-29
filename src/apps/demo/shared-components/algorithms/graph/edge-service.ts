import {Subject} from 'rxjs/Subject';
import {Coordinates} from './coordinates';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/bufferCount';

export class EdgeService extends Subject<Coordinates> {

  getCoordinates() : Observable<any> {
    return this.asObservable().bufferCount(2).map(buffer => {return {first:buffer[0], second:buffer[1]}});
  }
        
}