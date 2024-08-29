import { Component, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag, ScrollingModule, FormsModule, BookComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  backgroundColor: string = 'white';
  @Input() books: any = [];
  filterBooks: any = [];
  selectBook: any = [];

  _keyword: string = '';

  get keyword(): string {
    return this._keyword;
  }
  set keyword(value: string) {
    this._keyword = value;
    var filterBy = this._keyword.toLocaleLowerCase()
    this.filterBooks = this.books.filter((book: any) =>
      book.title.toLocaleLowerCase().includes(filterBy)
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  changeback(color: string) {
    this.backgroundColor = color;
  }
}
