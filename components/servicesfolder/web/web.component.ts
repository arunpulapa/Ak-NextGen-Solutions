import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-web',
  imports: [CommonModule],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {
  portfolioItems = [
    {
      title: 'E-commerce Website',
      description: 'An interactive e-commerce platform with modern UI/UX.',
      image: 'https://i.pinimg.com/736x/2e/e2/3a/2ee23a75c3328b872e0ba459f985c501.jpg',
    },
    {
      title: 'Corporate Website',
      description: 'A professional website for a corporate business.',
      image: 'https://i.pinimg.com/736x/41/46/ea/4146ea3d2563889ddbaf4d0f438f4a06.jpg',
    },
    {
      title: 'Portfolio Website',
      description: 'A stunning portfolio website for creative professionals.',
      image: 'https://i.pinimg.com/736x/1e/67/6f/1e676fabdbac684fd7910c2d4d6801d2.jpg',
    },
  ];
}
