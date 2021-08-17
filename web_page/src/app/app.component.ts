import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sentiment';

  name = '';

  response = null;

  loading = false;

  constructor(private rest: RestService) { }

  sendMovie() {
    const body = { 'movie': this.name }
    this.loading = true;
    this.rest.sendMovie(body).subscribe(res => {
      this.response = res.body['rank'];
      this.loading = false;
    })
  }

}
