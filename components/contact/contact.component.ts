import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   // Create a model for the contact form
   contactForm = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  // Replace these with your actual EmailJS credentials
  serviceID = 'service_m7ibm1k'; // Your EmailJS service ID
  templateID = 'template_01b40wm'; // Replace with your EmailJS template ID
  userID = 'ii4zk-hJxZQQwifvH'; // Replace with your EmailJS public key (user ID)

  // Method to send email
  onSubmit() {
    const templateParams = {
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      phone: this.contactForm.phone,
      message: this.contactForm.message,
    };

    emailjs
      .send(this.serviceID, this.templateID, templateParams, this.userID)
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
          // Reset form fields
          this.contactForm = { name: '', email: '', phone: '', message: '' };
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  }
}
