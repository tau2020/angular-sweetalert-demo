import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-sweetalert-demo';

  constructor(){}
  ngOnInit(): void {
    console.log('life Cycle Hook with Spontaneous response');

  }

  tinyAlert(){
    Swal.fire('Hey There!');

  }

  successNotification(){
    Swal.fire('Hi', 'We have been informed!', 'success');
  }

  alertConfirmation(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton:true,
     confirmButtonText:'Yes, go ahead',
     cancelButtonText:'No, let me think'

    }).then((result)=>{
      if(result.value){
        Swal.fire('Removed', 'Product removed successfully', 'success');
      }else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire('Camncelled', 'Product still in our database', 'error');
      }
    })
  }
}
