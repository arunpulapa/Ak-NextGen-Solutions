import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  playVideo() {
    // Implement video playback logic here
    console.log('Play video clicked');
  }
}
