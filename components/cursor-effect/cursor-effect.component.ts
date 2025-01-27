import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor-effect',
  imports: [],
  templateUrl: './cursor-effect.component.html',
  styleUrl: './cursor-effect.component.css'
})
export class CursorEffectComponent {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const dot = document.querySelector('.custom-cursor') as HTMLElement;
    if (dot) {
      const mouseX = event.clientX;  // Get the mouse's X position
      const mouseY = event.clientY;  // Get the mouse's Y position
      dot.style.left = `${mouseX}px`; // Position cursor horizontally
      dot.style.top = `${mouseY}px`;  // Position cursor vertically
    }
  }
}
