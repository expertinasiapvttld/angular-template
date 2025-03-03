import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  data: any[] = [];
  dropdownId: number | null = null;

  ngOnInit(): void {
    // Fetch data from the JSON (for demo, data is hardcoded)
    this.data = [
      { "id": 1, "name": "John Doe", "email": "john.doe@example.com", "phone": "123-456-7890", "address": "123 Street, City, Country" },
      { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com", "phone": "234-567-8901", "address": "456 Avenue, City, Country" },
      { "id": 3, "name": "Tom Brown", "email": "tom.brown@example.com", "phone": "345-678-9012", "address": "789 Boulevard, City, Country" },
      { "id": 4, "name": "Lucy Green", "email": "lucy.green@example.com", "phone": "456-789-0123", "address": "101 Road, City, Country" },
      { "id": 5, "name": "Michael Blue", "email": "michael.blue@example.com", "phone": "567-890-1234", "address": "202 Lane, City, Country" },
      { "id": 6, "name": "Sarah White", "email": "sarah.white@example.com", "phone": "678-901-2345", "address": "303 Street, City, Country" },
      { "id": 7, "name": "David Black", "email": "david.black@example.com", "phone": "789-012-3456", "address": "404 Avenue, City, Country" },
      { "id": 8, "name": "Emma Gray", "email": "emma.gray@example.com", "phone": "890-123-4567", "address": "505 Boulevard, City, Country" },
      { "id": 9, "name": "James Purple", "email": "james.purple@example.com", "phone": "901-234-5678", "address": "606 Road, City, Country" },
      { "id": 10, "name": "Olivia Pink", "email": "olivia.pink@example.com", "phone": "012-345-6789", "address": "707 Lane, City, Country" }
    ];
  }
  toggleDropdown(id: number): void {
    if (this.dropdownId === id) {
      this.dropdownId = null;

       // Close the dropdown if it's already open
    } else {
      this.dropdownId = id;  // Open the dropdown for the clicked row
    }
  }
}
