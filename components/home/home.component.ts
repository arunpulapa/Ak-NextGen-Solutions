import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // <-- Import necessary form classes
import { ReactiveFormsModule } from '@angular/forms'; // <-- Import ReactiveFormsModule
import Swiper from 'swiper';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  contactForm!: FormGroup;
  swiper: Swiper | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize form
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
     AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true // Ensures animation runs only once
        });
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  testimonials = [
    {
      image: 'https://via.placeholder.com/100', // Replace with client photo URL
      quote: 'Working with this company has been transformative. Their professionalism is top-notch!',
      name: 'John Doe',
      designation: 'CEO',
      company: 'Tech Solutions',
    },
    {
      image: 'https://via.placeholder.com/100',
      quote: 'Excellent service and support throughout the project. Highly recommend!',
      name: 'Jane Smith',
      designation: 'Marketing Manager',
      company: 'Creative Minds',
    },
    {
      image: 'https://via.placeholder.com/100',
      quote: 'They exceeded our expectations and delivered exceptional results.',
      name: 'Emily Johnson',
      designation: 'Product Owner',
      company: 'InnovateX',
    },
  ];
  
}
