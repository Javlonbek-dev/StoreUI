import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { Cart, Payment, PaymentMethod } from '../models/models';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  selectedPaymentMethodName='a';
  selectedPaymentMethod= new FormControl('0')
  
  address='';
  mobileNumber=""

  displaySpinner=false;
  message=''
  paymentMethods:PaymentMethod[]=[];
  
  usersCart:Cart={
    id:1,
    user:this.utilityService.getUser(),
    cartItems:[],
    ordered:false,
    orderedOn:''
  };

  usersPaymentInfo: Payment = {
    id: 0,
    user: this.utilityService.getUser(),
    paymentMethod: {
      id: 0,
      type: '',
      provider: '',
      available: false,
      reason: '',
    },
    totalAmount: 0,
    shipingCharges: 0,
    amountReduced: 0,
    amountPaid: 0,
    createdAt: '',
  };

  constructor(
    private navigationService:NavigationService,
    public utilityService:UtilityService){}


  ngOnInit(): void {
    this.navigationService.getPaymentMethods().subscribe((res:any)=>{
      this.paymentMethods=res;
    })

    this.selectedPaymentMethod.valueChanges.subscribe((res: any)=>{
       if (res === '0')  this.selectedPaymentMethodName = '';
        else this.selectedPaymentMethodName=res.toString(); 
    })

    this.navigationService
    .getActiveCartOfUser(this.utilityService.getUser().id)
    .subscribe((res:any)=>{
      this.usersCart=res;
      this.utilityService.calculatePayment(res, this.usersPaymentInfo);
    });

    this.address=this.utilityService.getUser().address;
    this.mobileNumber=this.utilityService.getUser().mobile
  }

  getPaymentMethod(id :string){
    let x= this.paymentMethods.find((v)=>v.id===parseInt(id))
    return x?.type+"-"+x?.provider;
  }
  placeOrder(){
    this.displaySpinner=true;
    let isPaymentSuccessfull=this.payMoney();

    if(!isPaymentSuccessfull){
      this.displaySpinner=false
      this.message="Something went wrong! Payment did not happen"
      return
    }

    let count = timer(0,3000).subscribe((res)=>{})
  }
  payMoney(){
    return false;
  }
}
