import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarDates: { date: Date, appointments: { title: string, time: string }[] }[] = [];
  newAppointment: { title: string, date: Date, time: string } = { title: '', date: null as any, time: '' };

  addAppointment() {
    if (this.newAppointment.title && this.newAppointment.date && this.newAppointment.time) {
      const existingDate = this.calendarDates.find(dateObj =>
        dateObj.date.toDateString() === this.newAppointment.date.toDateString()
      );

      if (existingDate) {
        existingDate.appointments.push({ title: this.newAppointment.title, time: this.newAppointment.time });
      } else {
        this.calendarDates.push({
          date: this.newAppointment.date,
          appointments: [{ title: this.newAppointment.title, time: this.newAppointment.time }]
        });
      }

      this.newAppointment = { title: '', date: null as any, time: '' };
    }
  }

  deleteAppointment(dateObj: { date: Date, appointments: { title: string, time: string }[] }, appointment: { title: string, time: string }) {
    const index = dateObj.appointments.indexOf(appointment);
    if (index !== -1) {
      dateObj.appointments.splice(index, 1);
    }
  }

  updateAppointment(dateObj: { date: Date, appointments: { title: string, time: string }[] }, appointment: { title: string, time: string }) {

  }

  onDrop(event: CdkDragDrop<{ date: Date, appointments: { title: string, time: string }[] }[]>) {
    moveItemInArray(this.calendarDates, event.previousIndex, event.currentIndex);
  }

}
