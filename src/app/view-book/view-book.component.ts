import { Component } from '@angular/core';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {

  data : any =[
    {
      "img" : "https://img.etimg.com/photo/msid-53575599,quality-100/.jpg",
      "title" : "harrypotter and cursed child",
      "price":255
    },
    {
      "img" : "https://rukminim1.flixcart.com/image/612/612/l2nmnww0/book/r/e/v/wake-up-life-is-calling-original-imagdyfrg5qyac4w.jpeg?q=70",
      "title" : "Wake up life is calling",
      "price":324
    },
    {
      "img" : "https://rivetedlit.com/wp-content/uploads/2020/03/when-the-world-was-ours-9781534499652_xlg-1.jpg",
      "title" : "When the World was Ours",
      "price":268
    },
    {
      "img" : "https://www.rd.com/wp-content/uploads/2021/10/girl-in-ice-ferencik-ecomm-via-amazon.jpg?fit=700,700",
      "title" : "Girl in Ice",
      "price":577
    },
    {
      "img" : "https://m.media-amazon.com/images/I/71FFVknxtAL.jpg",
      "title" : "Her final confession",
      "price":378
    },
    {
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AlhPE7H7fkxg8HlJ4fH97jU0BLRMuAwrQg&usqp=CAU",
      "title" : "Black Water Rising",
      "price":256
    },
    {
      "img" : "https://images.squarespace-cdn.com/content/v1/55ccc2bde4b07457fdfd3665/1655499916346-GT2FZCM5NQLJUWKPYE2O/house+across+the+lake.jpg",
      "title" : "The house across the lake",
      "price":875
    },
    {
      "img" : "https://static01.nyt.com/images/2017/04/16/books/review/0416-BKS-Doll1/0416-BKS-Doll1-superJumbo.jpg",
      "title" : "Bang",
      "price":278
    },
    {
      "img" : "https://m.media-amazon.com/images/I/51UdJ9934lL.jpg",
      "title" : "Our daughter's bones",
      "price":755
    }
  ]

}
