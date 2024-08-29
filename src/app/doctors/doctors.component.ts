import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../models/doctor';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((data: Doctor[]) => {
      this.doctors = data;
    });
  }
}