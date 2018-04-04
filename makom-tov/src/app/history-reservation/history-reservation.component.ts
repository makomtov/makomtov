import { Component, OnInit, Input } from '@angular/core';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-history-reservation',
  templateUrl: './history-reservation.component.html',
  styleUrls: ['./history-reservation.component.css']
})
export class HistoryReservationComponent implements OnInit {

  // @Input() reservations;
  dogsList;

  reservations = [
    { 'resDate': '18-12-2017', 'dogsNum': 2, 'startDate': '18-12-2017', 'endDate': '18-12-2017' },
    { 'resDate': '15-09-2017', 'dogsNum': 1, 'startDate': '15-09-2017', 'endDate': '15-09-2017' },
    { 'resDate': '18-01-2018', 'dogsNum': 4, 'startDate': '18-01-2018', 'endDate': '18-01-2018' },
    { 'resDate': '22-03-2018', 'dogsNum': 3, 'startDate': '22-03-2018', 'endDate': '22-03-2018' }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openResDetail(reservation) {
    this.dogsList = [
      { 'id': 1, 'itemName': 'שאגי', 'food': false, 'training': false, vaccinationDate: '17/02/2018' },
      { 'id': 2, 'itemName': 'כחלון', 'food': false, 'training': false, vaccinationDate: '17/02/2018' },
      { 'id': 3, 'itemName': 'אראלה', 'food': false, 'training': false, vaccinationDate: '17/02/2018' },
      { 'id': 4, 'itemName': 'בל', 'food': false, 'training': false, vaccinationDate: '17/02/2018' }
    ];

    const modalRef = this.modalService.open(ReservationDetailsComponent, { size: 'lg' });
    modalRef.componentInstance.reservationDetails = reservation;
    modalRef.componentInstance.dogsList = this.dogsList;
  }

}
