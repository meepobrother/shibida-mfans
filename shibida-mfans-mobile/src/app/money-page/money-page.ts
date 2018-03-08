import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
    selector: 'money-page',
    templateUrl: './money-page.html'
})
export class MoneyPage implements OnInit {
    constructor(
        public app: AppService
    ) { }

    ngOnInit() { }
}
