import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data: any;
    public flask = 'http://pedrug19.pythonanywhere.com/';

    constructor(
        private http: HttpClient
    ) {
    }

    getCsvData() {

    }


    getLocalData() {
        return this.http.get('assets/data.json');
    }

    getRecommendation(userid, randOn) {
        const flask = this.flask + '/predictions/' + randOn + '/' + userid;
        return this.http.get(flask);
    }
}
