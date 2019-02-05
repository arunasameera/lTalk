import { Component, OnInit , ElementRef} from '@angular/core';
import {FormBuilder,NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import {DateTimeAdapter} from 'ng-pick-datetime';
import {Router} from '@angular/router';
import {TopicService} from '../topic.service';
import {ToastrService} from 'ngx-toastr';
import {WordCountValidator} from '../../validators/wordcount.validator';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  model: any = {};
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  subForm: FormGroup;
  public min:any = new Date();

  constructor(private router: Router, private topicService: TopicService, private toastr:ToastrService, private fb: FormBuilder) { }

  ngOnInit() {
      this.subForm = this.fb.group({
          description : new FormControl('', [
            Validators.required,
            WordCountValidator
          ])
        });
  }


  onSubmit(form: NgForm){
      const value = form.value;

     const topicObj = {
          name: value.topic,
          description : value.description,
          email: value.email,
          dateOfLightingTalk : value.dateOfLightingTalk
     }

     this.topicService.addNew(topicObj).subscribe((res: Response) => {
             // const result = JSON.stringify(res._body);
             const r = res;
             const result:any = r;
             console.log(result.status);
             if (result.status === 'SUCCESS') {
               this.toastr.success('New Lighting Talk Topic Added Successfully !', 'Success!');
               this.router.navigate(['/view']);
             } else {
               this.toastr.error('Fail to Add Lighting Talk Topic', 'Error!');
             }
     });

  }

  onCancel(){
    this.router.navigate(['/view']);
  }

}
