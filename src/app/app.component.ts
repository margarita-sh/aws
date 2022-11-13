import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    window.localStorage.setItem(
      'authorization_token',
      'bWFyZ2FyaXRhc2g6VEVTVF9QQVNTV09SRA=='
    );
  }
}
