import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { SubCategoryService } from '../services/sub-category.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookListComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  categories: any = [];
  subCategories: any = [];
  book: any = [];
  constructor(
    private gategoryService: CategoryService,
    private subGategoryService: SubCategoryService,
    private bookService: BookService,

  ) { }

  ngOnInit() {
    this.gategoryService.getAll().subscribe((res: any) => {
      this.categories = res;
      console.log(this.categories);

    });
  }

  onCategoryChange(event: any) {
    const categoryId = event.target.value;
    this.subGategoryService.get(categoryId).subscribe((res: any) => {
      this.subCategories = res;
      console.log(this.subCategories);
    });

  }
  OnSubCategoryChange(event: any) {
    const subCategoryId = event.target.value;
    this.bookService.getBySubId(subCategoryId).subscribe((res: any) => {
      this.book = res;
      console.log(this.book);
    })
  }
}
