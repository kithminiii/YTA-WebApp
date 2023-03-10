import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/models/details.model';
import { DetailsService } from 'src/app/services/details.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-deactive',
  templateUrl: './deactive.component.html',
  styleUrls: ['./deactive.component.css']
})
export class DeactiveComponent implements OnInit {

  isLoggedIn = false;

  peoples?: Details[];
  currentPeople: Details = {};
  currentIndex = -1;
  first = '';

  constructor(private peopleService: DetailsService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.retrievePoeples();
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  retrievePoeples(): void {
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
    this.retrievePoeples();
    this.currentPeople = {};
    this.currentIndex = -1;
  }

  setActivePeople(people: Details, index: number): void {
    this.currentPeople = people;
    this.currentIndex = index;
  }

}
