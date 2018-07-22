import { Component, OnInit, Input } from '@angular/core';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { NgbModal, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { HttpRequestService } from '../services/http-request.service';

@Component({
  selector: 'app-history-reservation',
  templateUrl: './history-reservation.component.html',
  styleUrls: ['./history-reservation.component.css']
})
export class HistoryReservationComponent implements OnInit {

  // @Input() reservations;
  dogsList = [];
  userId = JSON.parse(localStorage.getItem('currentUser')).UserID;
  reservations;
  orderByDateAsc = true;

  constructor(private modalService: NgbModal,
    private httpReq: HttpRequestService,
    private parserFormatter: NgbDateParserFormatter) { }


  ngOnInit() {
    this.httpReq.getUserReservation(this.userId).then(data => {
      this.reservations = data.UserReservations;

      this.reservations.sort((a, b) => {
        const order = new Date(a.OrderDate).getTime() - new Date(b.OrderDate).getTime();
        if (order === 0) {
          return a.mDogs.length - b.mDogs.length;
        } else {
          return order;
        }
      });
    });
  }

  openResDetail(reservation) {

    // Init members
    this.dogsList = [];

    reservation.mDogs.forEach(element => {
      const row1 = { 'id': element.DogNumber, 'itemName': element.DogName, 'food': element.HomeFood,
        'training': element.DogTraining, vaccinationDate: element.DogRabiesVaccine };
        this.dogsList.push(row1);
    });

    const modalRef = this.modalService.open(ReservationDetailsComponent, { size: 'lg' });
    modalRef.componentInstance.reservationDetails = reservation;
    modalRef.componentInstance.dogsList = this.dogsList;
  }

  sortOrderDate() {
    this.reservations.reverse();
    this.orderByDateAsc = !this.orderByDateAsc;
  }
}
