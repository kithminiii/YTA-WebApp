import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/models/details.model';
import { DetailsService } from 'src/app/services/details.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  isLoggedIn = false;

  peoples?: Details[];
  currentPeople: Details = {};
  currentIndex = -1;
  first = '';

  constructor(private peopleService: DetailsService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.retrievePeoples();
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  retrievePeoples(): void {
    this.peopleService.getAll()
      .subscribe({
        next: (data) => {
          this.peoples = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePeoples();
    this.currentPeople = {};
    this.currentIndex = -1;
  }

  setActivePeople(people: Details, index: number): void {
    this.currentPeople = people;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentPeople = {};
    this.currentIndex = -1;

    this.peopleService.findByTitle(this.first)
      .subscribe({
        next: (data) => {
          this.peoples = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
