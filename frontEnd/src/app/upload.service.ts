import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment}from '../environments/environment';
const apiUrl = environment.apiUrl;
@Injectable({ providedIn: 'root' })
export class uploadService {
    temp: any;
    constructor(private http: HttpClient, private _router: Router) { }
    uploadTemplate(fileObj) {
        this.http.post('http://localhost:3000/api/uploadProducts', fileObj, {
            observe: 'body',
            params: new HttpParams().append('token', localStorage.getItem('token'))
        })
            .subscribe(res => {

            })
    }
    uploadSplitsTemplate(fileObj) {
        this.http.post('http://localhost:3000/api/uploadSplits', fileObj, {
            observe: 'body',
            params: new HttpParams().append('token', localStorage.getItem('token'))
        })
            .subscribe(res => {
            })
    }
    uploadDescriptions(fileObj){
        this.http.post('http://localhost:3000/api/uploadDescriptions',fileObj, {
            observe: 'body',
            params: new HttpParams().append('token', localStorage.getItem('token'))
        })
            .subscribe(data => {},
            error=>{
                console.log("here ua derek");
                console.log(error);
            })
    }
    getUploadProductReport() {
        return this.http.get('http://localhost:3000/api/uploadProduectReport')
    }

}

