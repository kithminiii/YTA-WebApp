import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/models/details.model';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {

  details: Details = {
    first: '',
    last: '',
    im: '',
    birth: '',
    email: '',
    confirm: '',
    location: '',
    pno: '',
    lang: ''
  };
  submitted = false;

  constructor(private detailService: DetailsService) { }

  saveDetails(): void {
    const data = {
      first: this.details.first,
      last: this.details.last,
      im: this.details.im,
      birth: this.details.birth,
      email: this.details.email,
      confirm: this.details.confirm,
      location: this.details.location,
      pno: this.details.pno,
      lang: this.details.lang
    };

    this.detailService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDetails(): void {
    this.submitted = false;
    this.details = {
      first: '',
      last: '',
      im: '',
      birth: '',
      email: '',
      confirm: '',
      location: '',
      pno: '',
      lang: ''
    };
  }

}
