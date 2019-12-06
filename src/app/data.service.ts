import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data: any;
    userid: any;
    public flask = 'http://127.0.0.1:5000/predictions/2';

    constructor(private http: HttpClient) {
    }

    getLocalData() {
        return this.http.get('assets/data.json');
    }

    getRecommendation() {
        return this.http.get(this.flask);
    }
}
