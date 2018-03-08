import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';

@Component({
    selector: 'car-page',
    templateUrl: './car-page.html',
    styleUrls: ['./car-page.scss']
})
export class CarPage implements OnInit {
    page: number = 0;
    psize: number = 20;
    list: any[] = [];
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService
    ) { }

    ngOnInit() {
        this.init();
    }

    init() {
        const url = this.app.getMobileUrl('getcarlist', { page: this.page, psize: this.psize });
        this.http.get(url).subscribe((res: any[]) => {
            this.list = res;
        });
    }

    addCar() {
        this.router.go('carNum', { op: 'mine' });
    }
}
