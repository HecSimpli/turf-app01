import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurfSample } from '../turf-sample';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-turfing-sample',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="turfingSample.
      photo" alt="photo of {{turfingSample.name}}">
      <h2 class="listing-heading">{{turfingSample.name}}</h2>
      <p class="listing-location">{{turfingSample.oz}}</p>
     <a [routerLink]="['/details', turfingSample.id]">More Details</a>
    </section>
  `,
  styleUrl: './turfing-sample.component.css'
})
export class TurfingSampleComponent {
  @Input() turfingSample!:TurfSample;
}
