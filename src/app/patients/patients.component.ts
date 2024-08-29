import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data: Patient[]) => {
      this.patients = data;
    });
  }
}