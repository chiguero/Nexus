import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class Landing {
  // Small, non-intrusive bindings for the landing component
  heroTitle = 'Nexus Books'; // used with interpolation in the template
  imagePath = 'assets/landing-img.jpg'; // used with property binding
  showPromo = true; // example of structural directive (*ngIf)
}
