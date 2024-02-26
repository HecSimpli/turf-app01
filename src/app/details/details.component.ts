import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TurfingService } from '../turfing.service';
import { TurfSample } from '../turf-sample';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
   <article>
   <img class="lisiting-photo" [src]="turfSample?.photo">
    <section class="listing-description">
      <h2 class="listing-heading">{{turfSample?.name}}</h2>
      <p class="listing-location">{{turfSample?.oz}}, {{turfSample?.pileHeight}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this kind of turf</h2>
      <ul>
        <li>Rolls available: {{turfSample?.availableRolls}}</li>
        <li>Available in 13ft wide: {{turfSample?.rollSize13}}</li>
        <li>Available in 15ft wide: {{turfSample?.rollSize15}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Make your order</h2>

      <form [formGroup]="applyForm" (submit)="submitApplication()">
      <label for="first-name">First Name</label>
      <input id="first-name" type="text" formControlName="firstName">

      <label for="last-name">Last Name</label>
      <input id="last-name" type="text" formControlName="lastName">

      <label for="email">Email</label>
      <input id="email" type="email" formControlName="email">
      <button type="submit" class="primary">Order Now</button>
      </form>
    </section>
   </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  turfingService = inject(TurfingService);
  turfSample: TurfSample | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  constructor() {
    const turfingSampleId = Number(this.route.snapshot.params["id"]);
    this.turfSample = this.turfingService.getHousingLocationById(turfingSampleId);
  }
  submitApplication(){
    this.turfingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
