import { API_KEY } from "../utils/configs";

class ApiService {
    constructor() {
        this.API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
        this.options = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    }

    async throwError(error, assumingIsError = false) {
        if (error instanceof Response) {
            const jsonError = await error.json();
            if (assumingIsError) throw jsonError;
            return jsonError;
        }
        if (assumingIsError) throw error;
        return error;
    }

    async request(apiUrl, options) {
        try {
            const response = await fetch(apiUrl, options);
            if (!response.ok) await this.throwError(response, true);
            if (response.status === 204) return;
            let data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    async getInfo(startDate, endDate) {
        let params = `&date=${startDate}`
        if (endDate) {
            params = `&start_date=${startDate}&end_date=${endDate}`
        }
        const apiUrl = `${this.API_URL}${params}`;
        try {
            let data = await this.request(apiUrl, this.options);
            if (!endDate) {
                data = [data]
            }
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default ApiService;
