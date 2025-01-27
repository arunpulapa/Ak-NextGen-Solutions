import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutSections = [
    {
      title: 'Who We Are',
      content: 'We are a passionate team driven by the belief that technology and creativity can change the world.'
    },
   
  ];

}
