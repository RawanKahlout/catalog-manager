import { Injectable } from '@angular/core';
import { HttpClient , HttpParams, HttpHeaders } from '@angular/common/http';
import{Router}from '@angular/router';
import {environment}from '../environments/environment';
const apiUrl = environment.apiUrl;
@Injectable({ providedIn: 'root' })
export class dataService {
    temp : any;
    constructor(private _http: HttpClient , private _router : Router) { }
    getStatistics(){
     return this._http.get('',{
         headers : new HttpHeaders().set('authorization','')
     })
    }
    getAttribute(actionId){
        
        return this._http.get(apiUrl+ actionId ,{
        headers : new HttpHeaders().set('authorization','')
        })
    }
    downloadFile(data, filename='data') {
        let csvData = this.ConvertToCSV(data, ['name', 'brand', 'brandId', 'categories', 'categoriesId', 'createdAt', 'discountPercentage',
            'entityId', 'gender', 'genderId', 'imageUrl', 'name', 'owner', 'ownerId', 'price', 'quantity', 'salePrice', 'sku', 'status', 'statusId', 'stockStatus',
            'stockStatusId', 'thumbnailImageUrl', 'type', 'typeId'
        ]);
        console.log(csvData)
        let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }
    ConvertToCSV(objArray, headerList) {
         let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
         let str = '';
         let row = 'S.No,';

         for (let index in headerList) {
             row += headerList[index] + ',';
         }
         row = row.slice(0, -1);
         str += row + '\r\n';
         for (let i = 0; i < array.length; i++) {
             let line = (i+1)+'';
             for (let index in headerList) {
                let head = headerList[index];

                 line += ',' + array[i][head];
             }
             str += line + '\r\n';
         }
         return str;
    }

    }
     
                
                
                
                
