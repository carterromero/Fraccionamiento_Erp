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
  id: number;
  alertDisable = true;
  alertDisables = true;
  alertMessage = "null";
  alertMessages = "null";
  datos:String;

  constructor(private route: ActivatedRoute, private router: Router,
  private commentsService: CommentsService) { }

  ngOnInit() {
    this.id = this.route.firstChild.snapshot.params['id'];
    
  }
 
    save()
    {

    this.comment.created_by = Number(localStorage.getItem('id'));
    this.comment.last_update_by = Number(localStorage.getItem('id'));
    this.comment.releases_id =this.id;
    this.commentsService.createComment(this.comment)
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

    onSubmit() 
      {
            this.alertDisable = true;
            this.alertDisables = true;
      /*  if(this.employee.condominums_description =="" ||  this.employee.condominums_description ==null ){
            this.alertDisable = false;
            this.alertMessage = "El Atributo Descripción es Obligatorio";          
        }
        else if(this.employee.legals_id =="" ||  this.employee.legals_id ==null ){
            this.alertDisable = false;
            this.alertMessage = "El Atributo empresa es Obligatorio";          
        }
        else{*/
            this.save();    
        // } 
    }


  gotoList() {
    this.router.navigate(['releases-list']);
  }

}
