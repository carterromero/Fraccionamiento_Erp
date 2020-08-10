import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/comments';
import { CommentsService } from 'src/app/comments.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.scss']
})
export class CommentsDetailsComponent implements OnInit {
  id: number;
  comment: Comments;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router,
  private commentService: CommentsService) { }

 ngOnInit() {
    this.comment = new Comments();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.commentService.getCommentO(this.id)
      .subscribe(data => {
        console.log(data);
        this.comment = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }


  onSubmit() 
  {
    this.router.navigate(['releases-list']);
  }


}

