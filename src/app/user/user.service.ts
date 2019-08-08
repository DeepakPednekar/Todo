import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {catchError, map, retry, tap} from 'rxjs/operators';
import { handleError, HTTP_RESPONSE } from '../app.const';

const URLS = {
 login: environment.getUrl('auth/'),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}

  authentication(userinfo: Object){

    console.debug('s_user | authenticating ');
    return this.http.post(URLS.login, userinfo).pipe(
      retry(3),
      // catchError(handleError),
      tap(ret_data => console.log('s_user | auth return data | ', ret_data)),
      map( ret_data => <HTTP_RESPONSE> ret_data)
    );
  }

}
