/**
 * Created by Deegha on 12/05/2018
 */
import { jobList } from "./mockData"

const baseUrl = "https://jobs.github.com"

const headers = {
    "Content-Type": "application/json",
    "Accept" : "application/json"
}

export const checkStatusAndGetJSON = (fetchResponse) =>
    fetchResponse.ok
        ? Promise.resolve(fetchResponse).then(response => response.json())
        : Promise.resolve(fetchResponse).then(apiError => apiError.json()).then(error => Promise.reject(error))

const get = (path) => fetch(baseUrl+path, {
    headers: headers
}).then(checkStatusAndGetJSON)

export const getJobList = () => new Promise(function(resolve, reject) {
                                    setTimeout(function() {
                                    resolve(jobList);
                                    }, 4000); // Wait 4s 
                                })

/**
 * commenting this api call becouse the api does not work
*/
// export const getJobList = get("/positions.json?description=react&location=remote")