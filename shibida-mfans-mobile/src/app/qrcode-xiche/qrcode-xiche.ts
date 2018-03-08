import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
    selector: 'qrcode-xiche',
    templateUrl: 'qrcode-xiche.html'
})
export class QrcodeXichePage implements OnInit {
    url: string;
    constructor(
        public app: AppService
    ) { }

    ngOnInit() {
        this.url = this.app.getMobileUrl('xichebyqrcode', { uid: this.app.userinfo.uid });
        console.log(this.url);
    }
}