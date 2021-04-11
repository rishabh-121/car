import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookNowService } from '../services/book-now.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {



  selectedFile:File;
  title:any='NewImage';

  customerDet:any={
    firstName:'',
    lastName:'',
    email:'',
    contactNo:1,
    address1:'',
    address2:'',
    city:'',
    state:'',
    zip:'',
    carNo:'',
    date:Date

  }

  constructor(private service:BookNowService, private router:Router)
  {
    
  }
  ngOnInit(): void {}
  
  onSelectedFile(event)
  {
    this.selectedFile = event.target.files[0];
  }

  proceed()
  {
    console.log(this.customerDet.date)
    const uploadImageData = new FormData();
    uploadImageData.append('first',this.customerDet.firstName);
    uploadImageData.append('last',this.customerDet.lastName);
    uploadImageData.append('em',this.customerDet.email);
    uploadImageData.append('cn',this.customerDet.contactNo);
    uploadImageData.append('ad1',this.customerDet.address1);
    uploadImageData.append('ad2',this.customerDet.address2);
    uploadImageData.append('city',this.customerDet.city);
    uploadImageData.append('state',this.customerDet.state);
    uploadImageData.append('zip',this.customerDet.zip);
    uploadImageData.append('caN',this.customerDet.carNo);
    uploadImageData.append('date',this.customerDet.date);
    uploadImageData.append('image', this.selectedFile, this.selectedFile.name);
    let res=this.service.addBookNowData(uploadImageData);
    res.subscribe((data) => {
      console.log(data);
      this.router.navigate(['/booking']); 
    });
 }


}
