import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from 'src/app/models/details.model';
import { DetailsService } from 'src/app/services/details.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  isLoggedIn = false;

  @Input() viewMode = false;

  @Input() currentPeople: Details = {
    first: '',
    last: '',
    department: '',
    birth: '',
    email: '',
    confirm: '',
    linemanager: '',
    pno: '',
    function: '',
    imagePath: '',
    eStatus: ''
  };

  message = '';

  constructor(
    private peopleService: DetailsService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPeople(this.route.snapshot.params["id"]);
    }
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  getPeople(id: string): void {
    this.peopleService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPeople = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePeople(): void {
    this.message = '';

    this.peopleService.update(this.currentPeople.id, this.currentPeople)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Details was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
}
