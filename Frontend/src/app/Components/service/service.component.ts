// frontend/src/app/components/service/service.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  service: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getServiceDetails('social-media').subscribe((data) => {
      this.service = data;
    });
  }
}
