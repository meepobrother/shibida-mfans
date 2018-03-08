import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';

@Component({
    selector: 'forget-page',
    templateUrl: 'forget-page.html',
    styleUrls: ['./forget-page.scss']
})
export class ForgetPage implements OnInit {
    form: FormGroup;
    constructor(
        public app: AppService,
        public fb: FormBuilder,
        public http: HttpClient,
        public router: We7RouterService
    ) {
        this.form = this.fb.group({
            mobile: '',
            password: '',
            repassword: '',
            code: '',
            code_id: ''
        });
    }

    ngOnInit() { }

    post() {
        let url = this.app.getMobileUrl('doforget');
        this.http.post(url, this.form.value).subscribe((res: any) => {
            if (res.status === -1) {
                alert(res.msg)
            } else {
                console.log(res);
                this.router.go('login');
            }
        });
    }
}