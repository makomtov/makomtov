import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const loginUrl = environment.makomTovServer + '/token';
const getUserUrl = environment.makomTovServer + '/api/Users/GetUser';
const signUp = environment.makomTovServer + '/api/Users/InsertUserDetails';
const getDogs = environment.makomTovServer + '/api/Users/GetUserDogs/';
const updateUserDetailsUrl = environment.makomTovServer + '/api/Users/UpdateUserDetails';
const getReservation = environment.makomTovServer + '/api/Reservation/GetUserOrders/';
const getCitiesUrl = environment.makomTovServer + '/api/XML/cities';
const getOpenHoursList = environment.makomTovServer + '/api/Reservation/OpenHoursList';
const createOrder = environment.makomTovServer + '/api/Reservation/CreateOrder';
const getOrderPrice = environment.makomTovServer + '/api/Reservation/CalculateOrderPrice';

@Injectable()
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  login(mail: string, password: string) {
    return this.userAuthentication(mail, password).toPromise().then(response => {

      // login successful if there's a jwt token in the response
      const token = response.access_token;
      if (token) {
        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('userToken', token);

        return this.http.post<any>(getUserUrl, {'userEmail': mail, 'userPassword': password}).toPromise().then(data => {
          localStorage.setItem('currentUser', JSON.stringify(data));
          // return true to indicate successful login
          return true;
        });
      } else {
        // return false to indicate failed login
        return false;
      }
    });
  }

  signUp(user: any) {
    return this.http.post<any>(signUp, user).toPromise();
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userToken');
  }

  getUserDogs(userId) {
    return this.http.get<any>(getDogs + userId)
      .toPromise().then(user => {
        return user;
      });
  }

  getUserReservation(userId) {
    return this.http.get<any>(getReservation + userId)
      .toPromise().then(user => {
        return user;
      });
  }

  getCities() {
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.get<any>(getCitiesUrl, {headers: reqHeader})
      .toPromise().then(cities => {
        return cities;
      });
  }

  getOpenHoursList() {
    return this.http.get<any>(getOpenHoursList)
      .toPromise().then(OpenHoursList => {
        return OpenHoursList;
      });
  }

  createOrder(orderDetails) {
    return this.http.post<any>(createOrder, orderDetails).toPromise().then(data => {
      console.log(data);
    });
  }

  calculateOrderProce(orderDetails) {
    return this.http.post<any>(getOrderPrice, orderDetails).toPromise().then(data => {
      return data;
    });
  }

  updateUserDetails(user: any) {
    this.http.post<any>(updateUserDetailsUrl, user).toPromise().then(data => {
        console.log(data);
      });
  }

  userAuthentication(userName, password) {
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'No-Auth': 'True'});
    const data = 'username=' + userName + '&password=' + password + '&grant_type=password';
    return this.http.post<any>(loginUrl, data, { headers: reqHeader });
  }
}
