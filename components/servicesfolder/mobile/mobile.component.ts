import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  imports: [CommonModule],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent {
  portfolioItems = [
    {
      title: 'E-commerce APP',
      description: 'An interactive e-commerce platform with modern UI/UX.',
      image: 'https://i.pinimg.com/736x/2e/e2/3a/2ee23a75c3328b872e0ba459f985c501.jpg',
    },
    {
      title: 'Housing camunity APP',
      description: 'A Place to Live, A Community to Thrive',
      image: 'https://www.pngkey.com/png/detail/420-4209831_a-smart-automation-solution-for-homes-and-businesses.png',
    },
    {
      title: 'Grocery & Food Delivery APP',
      description: 'Food at Your Fingertips, Freshness Guaranteed',
      image: 'https://img.freepik.com/free-photo/woman-checking-her-delivery-groceries_23-2149950116.jpg',
    },
  ];
}
