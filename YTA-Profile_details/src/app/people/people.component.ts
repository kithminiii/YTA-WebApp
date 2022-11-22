import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from 'src/app/models/details.model';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTutorial: Details = {
    first: '',
    last: '',
    department: '',
    birth: '',
    email: '',
    confirm: '',
    linemanager: '',
    pno: '',
    function: '',
    imagePath: ''
  };

  message = '';

  constructor(
    private tutorialService: DetailsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
