import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { QuestionDetailComponent } from './stack-over-flow/question-detail/question-detail.component';

export const routes: Routes = [
  { path: 'StackOverFlow', loadComponent: () => import("./stack-over-flow/stack-over-flow.component").then(so => so.StackOverFlowComponent) },
  { path: 'Books', component: BookComponent },
  { path: 'question/:id', loadComponent: () => import("./stack-over-flow/question-detail/question-detail.component").then(q => q.QuestionDetailComponent) },
  { path: '', component: BookComponent }
];
