import { Component, ViewChild , OnInit, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Observable, Subscription, interval} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  @ViewChild("f") form:NgForm;
  private firstSubscriptionObject: Subscription;
  
  submitted = false
  user= {
    username:'',
    email:'',
    secretQuestion:''
  }

  onSubmit() {
    console.log(this.form);
    this.submitted=true
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.userData.secret;
   // this.form.reset();
  }

  suggestUserName() {
    const suggestedName = 'superuser';
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  ngOnInit(): void {
    // this.firstSubscriptionObject = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customIntervalObservable = Observable.create( observer => {
      let count = 0;

     
      setInterval( () => {
        observer.next(count);

          if(count == 5) {
            observer.complete();
          }

        if(count >3) {
          observer.error(new Error('Count is greater than 3!')); 
        }
        count++;
      } , 1000);
    }, 1000);

    this.firstSubscriptionObject = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    } , () => {
      console.log('completed..');
    }
    )


  }

  ngOnDestroy(): void {
    this.firstSubscriptionObject.unsubscribe();
  }

}
