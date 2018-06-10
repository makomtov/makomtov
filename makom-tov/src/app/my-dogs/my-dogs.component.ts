import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';

@Component({
  selector: 'app-my-dogs',
  templateUrl: './my-dogs.component.html',
  styleUrls: ['./my-dogs.component.css']
})
export class MyDogsComponent implements OnInit {

  userId = JSON.parse(localStorage.getItem('currentUser')).UserID;
  myDogs = [];
  constructor(private httpReq: HttpRequestService) { }

  ngOnInit() {
    console.log(this.userId);
    this.httpReq.getUserDogs(this.userId).then(data => {
      console.log(JSON.stringify(data));
      this.myDogs = data;
    });
  }

  calcAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  getText(name){
    return "אתה בטוח שברצונך למחוק את " + name + " מרשימת הכלבים שלך?"
  }

  deleteDog(e) {
    this.myDogs = this.myDogs.filter(dog => dog.id !== e);
    // TODO: delete on server
  }

  getSrc(img){
    if (img) {
      return img;
    }

    return 'assets/dog-default.png'
  }

}
