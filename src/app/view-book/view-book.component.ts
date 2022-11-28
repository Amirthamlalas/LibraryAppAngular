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
      "price":255,
      "author":"J. K. Rowling",
      "description":"Harry Potter and the Cursed Child” is about the journey Albus takes while growing up, and the roles he and his best friend, Scorpius Draco Malfoys son, play when dark forces, perhaps in league with Voldemort, once again threaten the fate of the planet."
    },
    {
      "img" : "https://rukminim1.flixcart.com/image/612/612/l2nmnww0/book/r/e/v/wake-up-life-is-calling-original-imagdyfrg5qyac4w.jpeg?q=70",
      "title" : "Wake up life is calling",
      "price":324,
      "author":"Preeti Shenoy",
      "description":"Ankita has fought a mental disorder, been through hell, and survived two suicide attempts. Now in Mumbai, surrounded by her loving and supportive parents, everything seems idyllic. She is not on medication. She is in a college she loves, studying her dream subject: Creative Writing."
    },
    {
      "img" : "https://rivetedlit.com/wp-content/uploads/2020/03/when-the-world-was-ours-9781534499652_xlg-1.jpg",
      "title" : "When the World was Ours",
      "price":268,
      "author":"Liz Kessler",
      "description":"The story starts in Vienna, 1936, where three young friends – Leo, Elsa and Max – spend a perfect day together, unaware that around them Europe is descending into a growing darkness, and that soon they will be separated by the decisions that that their parents are making for their families' futures."

    },
    {
      "img" : "https://www.rd.com/wp-content/uploads/2021/10/girl-in-ice-ferencik-ecomm-via-amazon.jpg?fit=700,700",
      "title" : "Girl in Ice",
      "price":577,
      "author":"Erica Ferencik",
      "description":"Valerie Chesterfield is a linguist trained in the most esoteric of disciplines: dead Nordic languages. Despite Val's successful career, she leads a sheltered life and languishes in the shadow of her twin brother, Andy, an accomplished climate scientist stationed on a remote island off Greenland's barren coast."
    },
    {
      "img" : "https://m.media-amazon.com/images/I/71FFVknxtAL.jpg",
      "title" : "Her final confession",
      "price":378,
      "author": "Lisa Regan",
      "description":"Watching her friend dragged away in handcuffs, Josie couldn't believe for one second that Gretchen had killed that poor boy. Confession or not, someone else was involved. She would find out who…"
    },
    {
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AlhPE7H7fkxg8HlJ4fH97jU0BLRMuAwrQg&usqp=CAU",
      "title" : "Black Water Rising",
      "price":256,
      "author":"Attica Locke",
      "description":"Houston, Texas, 1981. Jay Porter is hardly the lawyer he set out to be, but he's long since made peace with not living the American Dream, and carefully tucked away his darkest sins: the guns, the FBI file, the trial that nearly destroyed him."
    },
    {
      "img" : "https://images.squarespace-cdn.com/content/v1/55ccc2bde4b07457fdfd3665/1655499916346-GT2FZCM5NQLJUWKPYE2O/house+across+the+lake.jpg",
      "title" : "The house across the lake",
      "price":875,
      "author":"Riley Sager",
      "description":"Casey Fletcher, a recently widowed actress trying to escape a streak of bad press, has retreated to the peace and quiet of her family's lake house in Vermont."
    },
    {
      "img" : "https://static01.nyt.com/images/2017/04/16/books/review/0416-BKS-Doll1/0416-BKS-Doll1-superJumbo.jpg",
      "title" : "Bang",
      "price":278,
      "author":" Sharon G. Flake",
      "description":"Mann is only thirteen, yet he has already had to deal with more than most go through in a lifetime. His family is still reeling from the tragic shooting death of his little brother, Jason, each person coping with grief in his or her own way."
    },
    {
      "img" : "https://m.media-amazon.com/images/I/51UdJ9934lL.jpg",
      "title" : "Our daughter's bones",
      "price":755,
      "author":"Ruhi Choudhary",
      "description":"When she was just twelve years old, Mackenzie Price came home to find her father bleeding to death on the kitchen floor. She will never forget that night, nor what her mother asked her to do... Twenty years later, Detective 'Mack' Price is back in Lakemore, despite vowing never to return."
    }
  ]

}
