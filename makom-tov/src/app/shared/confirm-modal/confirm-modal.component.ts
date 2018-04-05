import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Output() Yes = new EventEmitter();
  @Input() text = "";
  @Input() idToDelete;

  closeResult: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
