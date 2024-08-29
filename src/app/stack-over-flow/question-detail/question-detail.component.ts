import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StackOverFlowService } from '../../services/stack-over-flow.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-question-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './question-detail.component.html',
  styleUrl: './question-detail.component.scss'
})
export class QuestionDetailComponent {
  question: any;

  constructor(private route: ActivatedRoute, private stackoverflowService: StackOverFlowService) { }

  ngOnInit(): void {
    const questionId = +this.route.snapshot.paramMap.get('id')!;
    this.stackoverflowService.getQuestionDetails(questionId).subscribe(data => {
      this.question = data.items[0];
    });
  }
}
