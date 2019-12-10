import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data: any;
    public flask: any;

    constructor(
        private http: HttpClient
    ) {
    }

    getLocalData() {
        return this.http.get('assets/data.json');
    }

    getRecommendation(userid, randOn) {
        this.flask = 'http://127.0.0.1:5000/predictions/' + randOn + '/' + userid;
        return this.http.get(this.flask);
    }
}
