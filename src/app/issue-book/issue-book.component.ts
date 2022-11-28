import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
  name=""
  title=""
  issuedate=""
  memnum=""

  issue=()=>
  {
    let data: any={
      "name":this.name,
      "title":this.title,
      "issuedate":this.issuedate,
      "memnum":this.memnum
      
    }
    console.log(data)
  }


}
