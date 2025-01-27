import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  // portfolioItems = [
  //   {
  //     image: 'https://thumbs.dreamstime.com/b/architect-plan-working-table-crane-building-construction-background-file-35192700.jpg',
  //     title: 'Constrction WebSite',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   },
  //   {
  //     image: 'https://wpschoolpress.com/wp-content/uploads/2023/05/school-management-software.png',
  //     title: 'School Managment App',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   },
  //   {
  //     image: 'https://images.klipfolio.com/website/public/5eaa172d-9c85-4a66-9a34-8dd8e3abb8d3/financial-dashboard-example.png',
  //     title: 'Finance DashBoard',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   }
  // ];
  portfolioItems = [
    { title: 'E-commerce Website', description: 'A modern e-commerce platform.', image: 'https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-1.jpg', category: 'web' },
    { title: 'Constrction WebSite', description: 'A personal portfolio site.', image: 'https://thumbs.dreamstime.com/b/architect-plan-working-table-crane-building-construction-background-file-35192700.jpg', category: 'web' },
    { title: 'Finance DashBoard', description: 'A personal portfolio site.', image: 'https://images.klipfolio.com/website/public/5eaa172d-9c85-4a66-9a34-8dd8e3abb8d3/financial-dashboard-example.png', category: 'web' },
    { title: 'CommuneHub App', description: 'Connecting neighbors, simplifying housing.', image: 'https://www.neighbium.com/wp-content/uploads/2021/12/white-label-app-960x600.jpg', category: 'mobile' },
    { title: 'Baskit App', description: 'Fresh groceries and meals, delivered fast.', image: 'https://media.istockphoto.com/id/1221455039/photo/man-checking-his-fresh-food-delivery.jpg?s=612x612&w=0&k=20&c=nal2bcpo1JK-1hswRU-WdvqpPVxdX4dnaj1YM81S3PQ=', category: 'mobile' },
    // { title: 'Food Delivery App', description: 'A fast food ordering app.', image: 'mobile2.jpg', category: 'mobile' }
  ];

  // Categorized lists
  webProjects = this.portfolioItems.filter(item => item.category === 'web');
  mobileProjects = this.portfolioItems.filter(item => item.category === 'mobile');
}
