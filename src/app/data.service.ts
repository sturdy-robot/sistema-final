import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data: any;
    public flask = 'https://pedrug19.pythonanywhere.com/';

    constructor(
        private http: HttpClient
    ) {
    }

    submitRating(uid, itemid, rating) {
        const flask = this.flask + '/ratings/' + uid + '/' + itemid + '/' + rating;
        return this.http.get(flask);
    }

    getLocalData() {
        return this.http.get('assets/data.json');
    }

    getRecommendation(userid, randOn) {
        const flask = this.flask + '/predictions/' + randOn + '/' + userid;
        return this.http.get(flask);
    }
}
