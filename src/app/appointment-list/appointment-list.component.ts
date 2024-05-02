import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})

export class AppointmentListComponent {
  appointment: Appointment = {
    id: 1,
    title: 'Take a dog for a walk',
    date: new Date('01-01-2024')
  }

  newApptTitle = ""
  newApptDate = new Date('05-01-2024')


  addAppointment() {

  }
}


