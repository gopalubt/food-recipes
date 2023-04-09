import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponaseData {
    idToken:	    string
    email:	        string,
    refreshToken:	string,
    expiresIn:	    string,
    localId:	    string  
}

@Injectable({providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }
    // signupurl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]";
    
    signup(email: string, password: string ) {
        return this.http.post<AuthResponaseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACOO1nunO0E1kiLHjMWUoCiRhrNSpsSaI", {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        );
    }
}