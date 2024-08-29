import { Component, Pipe } from '@angular/core';
import { StackOverFlowService } from '../services/stack-over-flow.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-stack-over-flow',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './stack-over-flow.component.html',
  styleUrl: './stack-over-flow.component.scss'
})
export class StackOverFlowComponent {
  questions: any[] = [];

  constructor(
    private stackoverflowService: StackOverFlowService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stackoverflowService.getRecentQuestions().subscribe(data => {
      this.questions = data.items;
    });
  }
  viewDetails(questionId: number): void {
    this.router.navigate(['/question', questionId]);
  }
}
