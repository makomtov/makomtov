import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dogs',
  templateUrl: './my-dogs.component.html',
  styleUrls: ['./my-dogs.component.css']
})
export class MyDogsComponent implements OnInit {

  myDogs = [];
  constructor() { }

  ngOnInit() {
    this.myDogs = [
      { 'id': '1', 'name': "כחלון", 'birthDate': '2015-02-01T00:00:00', 'type': 'פינצר', 'shvav': '1234', 'comments': 'לא חברותית בכללל', 'image': '', 'gender': 'נקבה', 'isNeuter': true, 'vaccinationDate': '2018-02-01T00:00:00'},
      { 'id': '2', 'name': "שאגי", 'birthDate': '2017-02-01T00:00:00', 'type': 'סוג כלשהו', 'shvav': '1111', 'comments': 'מלא ברוק', 'image': 'assets/p2.jpg', 'gender': 'זכר', 'isNeuter': true, 'vaccinationDate': '2018-02-01T00:00:00' },
      { 'id': '3', 'name': "בל", 'birthDate': '2010-02-01T00:00:00', 'type': 'גולדן', 'shvav': '2235', 'comments': 'חמודה מאוד מאוד מאוד', 'image': 'assets/p3.jpg', 'gender': 'נקבה', 'isNeuter': true, 'vaccinationDate': '2018-02-01T00:00:00' },
      { 'id': '4', 'name': "אראלה", 'birthDate': '2017-02-01T00:00:00', 'type': 'מיצי', 'shvav': '4587', 'comments': 'נעלם לעיתים קרובות', 'image': 'assets/p4.jpg', 'gender': 'זכר', 'isNeuter': false, 'vaccinationDate': '2018-02-01T00:00:00' }]
  }

  calcAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
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
