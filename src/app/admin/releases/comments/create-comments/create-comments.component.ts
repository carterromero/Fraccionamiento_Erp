import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/comments';
import { CommentsService } from 'src/app/comments.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.scss']
})
export class CreateCommentsComponent implements OnInit {

  comment : Comments = new Comments();
  comments: Observable<Comments[]>;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;
  id : number;
 
  constructor(private commentService:CommentsService,private route: ActivatedRoute,
    private router: Router) { }


    ngOnInit() {
    
      this.id = this.route.firstChild.snapshot.params['id']
      this.commentService.createComment(this.id).subscribe(data => {
          console.log(data);
       //   this.comments = data;
          this.comment.releasesC_status = (String(this.comment.releasesC_status) == "false") ? null:"false";
     
        }, error => {
          console.log(error);
        });
       
    }
   
    createComment() {
      this.alertDisable = true;
      this.alertDisables = true;
      this.commentService.createComment(this.comment)
      .subscribe(data => {console.log(data); 
            this.alertDisables = false;
            this.alertMessages ="Se actualizo";
            this.gotoList();  
        },
        error => { 
            this.alertDisable = false;
            this.alertMessage = "Erro al actualizar";     
        });
    }
  
  
  
    onSubmit() {
    
     
        this.createComment(); 
    
  
    }
  
    gotoList() {
      this.router.navigate(['releases-list']);
    }
  
}
