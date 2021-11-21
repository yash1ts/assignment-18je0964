import axios from 'axios';

export default class Client {

    baseUrl = 'https://interview-8e4c5-default-rtdb.firebaseio.com/';

    key = '7254860406';

    getCounterRoute = () => ('front-end/7254860406.json');

    getCounterUpdateRoute = () => ('front-end.json');

    doFetch = async (method, url, data = {}) => {
        console.log(`Client: fetching [${method}] route ${this.baseUrl + url}`);
        try {
            const response = await axios({ method, url: this.baseUrl + url, data, headers: { 'Content-Type': 'application/json' } });
            return response?.data;
        } catch (error) {
            return error.response?.data || { error };
        }
    };

    updateCounter = async (value) => {
        const body = {};
        body[this.key] = value;
        const res = await this.doFetch('PUT', this.getCounterUpdateRoute(), body);
        if (res && res[this.key]) {
            return res[this.key];
        } else return null;
    }

    getCounter = async () => {
        const res = await this.doFetch('GET', this.getCounterRoute());
        if (typeof res === "number") {
            return res;
        } else if (res == null) {
            return 1;
        } else return null;
    }


}