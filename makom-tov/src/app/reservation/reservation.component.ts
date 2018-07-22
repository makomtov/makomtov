import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { HttpRequestService } from '../services/http-request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ReservationDetailsComponent } from '../history-reservation/reservation-details/reservation-details.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  constructor(private router: Router,
    private sharedService: SharedService,
    private httpReq: HttpRequestService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private parserFormatter: NgbDateParserFormatter) {

    this.createForm();
  }

  @ViewChild('content') content: any;
  userId = JSON.parse(localStorage.getItem('currentUser')).UserID;

  OrderForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  orderDetails;
  dropdownSettings = {};
  shifts = [];
  fromModel;
  toModel;
  fromMin;
  resultOrder = '';

  ngOnInit() {
    console.log(this.userId);
    this.httpReq.getUserDogs(this.userId).then(data => {
      console.log(JSON.stringify(data));
      let id = 0;
      data.forEach(element => {
        console.log(element);

        this.dropdownList.splice(0, 0,
          {
            'id': id,
            'DogNumber': element.DogNumber,
            'itemName': element.DogName,
            'HomeFood': false,
            'DogTraining': false,
            'vaccinationDate': element.DogRabiesVaccine
          });

        id++;
      });
    });

    this.httpReq.getOpenHoursList().then(data => {
      this.shifts = data;
    });

    const d: Date = new Date();
    const today = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
    this.fromMin = today;
    this.fromModel = today;
    this.toModel = today;

    this.dropdownSettings = {
      text: 'בחר כלבים',
      selectAllText: 'בחר את כולם',
      unSelectAllText: 'הסר את כולם',
    };
  }

  onItemSelect(item: any) {
    this.orderDetails = undefined;
  }
  OnItemDeSelect(item: any) {
    const objIndex = this.dropdownList.findIndex((obj => obj.id === item.id));
    this.dropdownList[objIndex].HomeFood = false;
    this.dropdownList[objIndex].DogTraining = false;
    this.orderDetails = undefined;
  }
  onSelectAll(items: any) {
    this.orderDetails = undefined;
  }
  onDeSelectAll(items: any) {
    this.dropdownList.forEach(element => {
      element.HomeFood = false;
      element.DogTraining = false;
    });
    this.orderDetails = undefined;
  }

  change() {
    this.orderDetails = undefined;
  }

  createForm() {
    this.OrderForm = this.fb.group({
      FromDate: ['', Validators.required],
      ShiftNumberFrom: ['1', Validators.required],
      ToDate: ['', Validators.required],
      ShiftNumberTo: ['1', Validators.required]
    });
  }

  editDogs(event) {
    if (event.action === 1) {
      const objIndex = this.selectedItems.findIndex((obj => obj.id === event.id));
      this.selectedItems[objIndex].HomeFood = event.value;
    } else if (event.action === 2) {
      const objIndex = this.selectedItems.findIndex((obj => obj.id === event.id));
      this.selectedItems[objIndex].DogTraining = event.value;
    }

    this.orderDetails = undefined;
  }

  checkPrice() {
    this.orderDetails = {
      'Userid': this.userId,
      'UserEmail': JSON.parse(localStorage.getItem('currentUser')).UserEmail,
      'FromDate': this.parserFormatter.format(this.OrderForm.value.FromDate),
      'ShiftNumberFrom': this.OrderForm.value.ShiftNumberTo,
      'ToDate': this.parserFormatter.format(this.OrderForm.value.ToDate),
      'ShiftNumberTo': this.OrderForm.value.ShiftNumberTo,
      'Price': '',
      'mDogs': this.selectedItems
    };

    this.httpReq.calculateOrderProce(this.orderDetails).then(data => {
      if (data === -999 || data === -998) {
        this.orderDetails.Price = 'להזמנות מיותר משני כלבים ניתן לשריין מקום אך המחיר יקבע טלפונית';
      } else {
        this.orderDetails.Price = data + ' ש"ח';
      }
    });
  }

  order() {
    if (this.orderDetails.Price !== undefined && this.OrderForm.status !== 'INVALID') {
      this.httpReq.createOrder(this.orderDetails).then((data) => {
        const modalRef = this.modalService.open(this.content);
        this.resultOrder = 'הזמנתך בוצעה בהצלחה' + ', ' + 'מחיר ההזמנה הינו: ' + this.orderDetails.Price;

        console.log(data);

        this.router.navigateByUrl('/');
      }).catch((err) => {
        const modalRef = this.modalService.open(this.content);
        this.resultOrder = err.error.Message;
      });
    }
  }
}
