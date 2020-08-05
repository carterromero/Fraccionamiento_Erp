import { Component, OnInit } from '@angular/core';
import { Releases } from 'src/app/releases';
import { ReleasesService } from 'src/app/releases.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comments } from 'src/app/comments';
import { CommentsService } from 'src/app/comments.service';


@Component({
  selector: 'app-releases-details',
  templateUrl: './releases-details.component.html',
  styleUrls: ['./releases-details.component.scss']
})
export class ReleasesDetailsComponent implements OnInit {
  id: number;
  release: Releases;
  comment : Comments;
  submitted = false;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  
  constructor(private route: ActivatedRoute,private router: Router, private commentService:CommentsService,
  private releaseService: ReleasesService) { }

 ngOnInit() {
    this.release = new Releases();    
    this.id = this.route.firstChild.snapshot.params['id']
    console.log(this.id);
    
    
    this.releaseService.getRelease(this.id)
      .subscribe(data => {
        console.log(data);
        this.release = data;
      }, error => {
        console.log(error);
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = error['statusText'];          
        }
      });
  }

  save()
   {

    this.comment.created_by = Number(localStorage.getItem('id'));
    this.comment.last_update_by = Number(localStorage.getItem('id'));
    this.commentService.createComment(this.comment)
      .subscribe(data => 
        {
          console.log(data);
          this.alertDisables = false;
          this.alertMessages ="Se inserto el comentario correctamente";
          this.comment  = new Comments();
        }, 
      error => {
        console.log(error);  
        let coins = [];
        for (let key in error) {
          this.alertDisable = false;
          this.alertMessage = "El comentario no se puede agregar";          
        }    
      });
  }


}
