import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';
@Component({
    selector: 'message-detail',
    templateUrl: 'message-detail.html',
    styleUrls: ['./message-detail.scss']
})
export class MessageDetailPage implements OnInit {
    msg: any;
    constructor(
        public app: AppService,
        public http: HttpClient,
        public router: We7RouterService
    ) { }

    ngOnInit() {
        let url = this.app.getMobileUrl('getmessagedetail');
        this.http.get(url).subscribe(res => {
            this.msg = res;
        });
    }
}