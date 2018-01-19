import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

    apiosoite = 'http://api.hel.fi/linkedevents/v1/place/?format=json';
    tulos: any;
    apiTulos: any;

    constructor(private http: HttpClient) {
    }

    getJson() {
        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe(data => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    getFromApi() {

        interface ApiInterface {
            data: any;
        }

        this.http.get<ApiInterface>(this.apiosoite).subscribe(data => {
            console.log(data);
            this.apiTulos = data.data;
        });
    }

    ngOnInit() {
        this.getJson();
        this.getFromApi();
    }

}
