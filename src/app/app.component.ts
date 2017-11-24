import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  providers:[BookService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
