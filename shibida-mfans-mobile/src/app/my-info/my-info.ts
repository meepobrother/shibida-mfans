import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';

@Component({
    selector: 'my-info',
    templateUrl: './my-info.html',
    styleUrls: ['./my-info.scss']
})

export class MyInfoPage implements OnInit {
    constructor(
        public http: HttpClient,
        public app: AppService,
        public router: We7RouterService
    ) { }

    ngOnInit() {
        this.app.autoLogin();
    }

    save() {
        let url = this.app.getMobileUrl('saveuserinfo');
        this.http.post(url, this.app.userinfo).subscribe(res => {
            this.router.go('card');
        });
    }
}