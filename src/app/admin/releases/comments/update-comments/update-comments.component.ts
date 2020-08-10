import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Comments } from 'src/app/comments';
import { CommentsService } from 'src/app/comments.service';



@Component({
  selector: 'app-update-comments',
  templateUrl: './update-comments.component.html',
  styleUrls: ['./update-comments.component.scss']
})
export class UpdateCommentsComponent implements OnInit {

  id: number;

  comment: Observable<Comments[]>;
  comments: Comments = new Comments();
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;

  constructor(private route: ActivatedRoute, private router: Router,
  private commentService: CommentsService) { }

  ngOnInit() {
    
    this.id = this.route.firstChild.snapshot.params['id']
    this.commentService.getCommentO(this.id).subscribe(data => {
        console.log(data);
        this.comment = data;
        this.comments.releasesC_status = (String(this.comments.releasesC_status) == "false") ? null:"false";
        console.log(this.comments.releasesC_status);
      }, error => {
        console.log(error);
      });
     
  }


  updateReservation() {
    this.comments.last_update_by=Number(localStorage.getItem('id'));
    this.alertDisable = true;
    this.alertDisables = true;
    this.commentService.updateComment(this.id, this.comment)
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
  
   
      this.updateReservation(); 
  

  }

  gotoList() {
    this.router.navigate(['releases-list']);
  }


}




