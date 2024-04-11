import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component'

export interface blogPost {
  id: number;
  title: string;
  image: string;
  published_at: Date;
  content: string;
  author: string;
}

const ELEMENT_DATA: blogPost[] = [
  {
    id: 1,
    title: 'First Post',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
    content: 'This is the first post',
    author: 'Felipeti de Caravanchel',
  },
  {
    id: 2,
    title: 'Second Post',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
    content: 'This is the second post',
    author: 'Julián Gómez',
  },
  {
    id: 3,
    title: 'Third Post',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
    content: 'This is the third post',
    author: 'Dani Río',
  },
  {
    id: 4,
    title: 'Fourth Post',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
    content: 'This is the',
    author: 'Leo Messi',
  },
  {
    id: 5,
    title: 'Fifth Post',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
    content: 'This is the fifth post',
    author: 'Cristiano Ronaldo',
  },
  {
    id: 6,
    title: 'Sixth Post',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
    content: 'This is the sixth post',
    author: 'Mike Tyson',
  },
]

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css'],
})
export class AdminBlogComponent {
  displayedColumns: string[] = ['id', 'title', 'image', 'author', 'published_at', 'actions']

  dataSource = ELEMENT_DATA

  constructor(private readonly dialog: MatDialog) { }

  editPost(id: number): void {
    // eslint-disable-next-line no-console
    console.log('Editing post', id)
  }

  deletePost(id: number): void {
    this.dataSource = this.dataSource.filter(post => post.id !== id)
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        this.deletePost(id)
      }
    })
  }
}
