import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  img=""
  title=""
  price=""
  author=""
  description=""
  readValue=()=>
  {
    let data : any ={
      "img" : this.img,
      "title" : this.title,
      "price":this.price,
      "author":this.author,
      "description":this.description
    }

    console.log(data)
  }

}
