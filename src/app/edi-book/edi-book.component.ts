import { Component } from '@angular/core';

@Component({
  selector: 'app-edi-book',
  templateUrl: './edi-book.component.html',
  styleUrls: ['./edi-book.component.css']
})
export class EdiBookComponent {
  title=""

  edit=()=>{
    let data : any={
      "title":this.title
    }
    console.log(data)
  }
}
