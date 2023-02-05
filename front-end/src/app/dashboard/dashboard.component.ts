import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tabs: HTMLElement[] = [];
  content: HTMLElement[] = [];
  index: any;

  ngOnInit() {
    this.tabs = Array.from(document.querySelectorAll('.tabs'));
    this.content = Array.from(document.querySelectorAll('.content'));
    this.index = 0;

    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {

        if (tab.classList.contains('active')) {
          return;
        } else {
          tab.classList.add('active');
        }

        this.index = tab.getAttribute('data-dashboard');

        for (let i = 0; i < this.tabs.length; i++) {

          if (this.tabs[i].getAttribute('data-dashboard') !== this.index) {
            this.tabs[i].classList.remove('active');
          }
        }

        for (let j = 0; j < this.content.length; j++) {

          if (this.content[j].getAttribute('data-dashboard') === this.index) {
            this.content[j].classList.add('activeContent');
          } else {
            this.content[j].classList.remove('activeContent');
          }
        }
      });
    });
  }
}
