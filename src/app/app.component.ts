import { Component, AfterViewInit, OnInit } from '@angular/core';
declare let feedbackPopup: any; // Declare the global variable if necessary


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  feedbackData: any = null;

  ngAfterViewInit(): void {
    this.listenForFeedback();
  }

  listenForFeedback() {
    document.addEventListener('feedbackSubmitted', (event: any) => {
      this.feedbackData = event.detail;
      console.log('Feedback received:', this.feedbackData);
    });
  }
}
