import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as rxjs from 'rxjs';
import { Category, User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  baseUrl = "https://localhost:7135/api/Shopping/"

  constructor(private http: HttpClient) { }

  getCategoryList() {
    let url = this.baseUrl + 'GetCategoryList';
    return this.http.get<any[]>(url).pipe(
      rxjs.map((categories) => categories.map((category) => {
        let mappedCategory: Category = {
          id: category.id,
          category: category.category,
          subcategory: category.subcategory,
        };
        return mappedCategory;
      })
      )
    );
  }

  getProducts(category: string, subcategory: string, count: number) {
    return this.http.get<any[]>(this.baseUrl + 'GetProducts', {
      params: new HttpParams()
        .set('category', category)
        .set('subcategory', subcategory)
        .set('count', count),
    });
  }

  getProduct(id: number) {
    let url = this.baseUrl + "GetProduct/" + id;
    return this.http.get(url);
  }

  registerUser(user: User) {
    let url = this.baseUrl + 'RegisterUser'
    return this.http.post(url, user, { responseType: 'text' });
  }

  loginUser(email:string, password:string){
    let url=this.baseUrl+'LoginUser';
    return this.http.post(
      url,
      {Email:email,Password:password},
      {responseType:'text'}
    );
  }

  submitReview(userid:number, productid:number,review:string){
    let obj: any={
      User:{
        Id :userid
      },
      Product:{
        Id:productid
      },
      Value:review,
    };

    let url= this.baseUrl+"InsertReview";
    return this.http.post(url,obj,{responseType:'text'})
  }

  getAllReviewsOfProduct(productId:number){
    let url = this.baseUrl+"GetProductReviews/"+productId;
    return this.http.get(url);
  }
}
