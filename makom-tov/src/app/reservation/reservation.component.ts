import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  public user;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { 'id': 1, 'itemName': 'שאגי', 'food': false, 'training': false, vaccinationDate: '17/02/2018' },
      { 'id': 2, 'itemName': 'כחלון', 'food': false, 'training': false, vaccinationDate: '17/02/2018' },
      { 'id': 3, 'itemName': 'אראלה', 'food': false, 'training': false, vaccinationDate: '17/02/2018' },
      { 'id': 4, 'itemName': 'בל', 'food': false, 'training': false, vaccinationDate: '17/02/2018'}
    ];

    this.dropdownSettings = {
      text: 'בחר כלבים',
      selectAllText: 'בחר את כולם',
      unSelectAllText: 'הסר את כולם',
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    let objIndex = this.dropdownList.findIndex((obj => obj.id === item.id));
    this.dropdownList[objIndex].food = false;
    this.dropdownList[objIndex].training = false;
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    this.dropdownList.forEach(element => {
      element.food = false;
      element.training = false;
    });
    console.log(items);
  }

  editDogs(event) {
    if (event.action === 1){
      let objIndex = this.selectedItems.findIndex((obj => obj.id === event.id));
      this.selectedItems[objIndex].food = event.value;
    } else if(event.action === 2) {
      let objIndex = this.selectedItems.findIndex((obj => obj.id == event.id));
      this.selectedItems[objIndex].training = event.value;
    }

  }
}
