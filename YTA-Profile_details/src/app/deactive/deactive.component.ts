import { Component, OnInit } from '@angular/core';
import { Details } from '../models/details.model';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-deactive',
  templateUrl: './deactive.component.html',
  styleUrls: ['./deactive.component.css']
})
export class DeactiveComponent implements OnInit {

  tutorials?: Details[];
  currentTutorial: Details = {};
  currentIndex = -1;
  first = '';

  constructor(private tutorialService: DetailsService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Details, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

}
