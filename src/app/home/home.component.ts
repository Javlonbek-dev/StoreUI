import { Component, OnInit } from '@angular/core';
import { SuggestedProducts } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  suggestedProducts: SuggestedProducts[] = [
    {
      benarimage: 'Baner/Baner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'mobiles',
      },
    },
    {
      benarimage: 'Baner/Baner_Laptop.png',
      category: {
        id: 1,
        category: 'electronics',
        subcategory: 'laptops',
      },
    },
    {
      benarimage: 'Baner/Baner_Chair.png',
      category: {
        id: 1,
        category: 'furniture',
        subcategory: 'chairs',
      },
    },
  ];
 
 
  ngOnInit(): void {
    
  }

}
