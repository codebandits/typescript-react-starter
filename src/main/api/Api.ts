import {AxiosInstance} from "axios";
import axios from "axios";
import {AxiosResponse} from "axios";

export namespace Api {
    export function getInstance(): AxiosInstance {
        return axios
    }

    export function getGreeting(): Promise<Greeting> {
        return getInstance()
            .get("http://localhost:8080/greeting")
            .then((response: AxiosResponse) => {
                return new Greeting(response.data.greeting)
            })
    }
}

export class Greeting {
    constructor(public greeting: string) {
    }
}