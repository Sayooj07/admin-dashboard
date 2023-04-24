import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

//userdefined event Creation
 
@Output() onMenuBtnClick = new EventEmitter 


 menuBtnClicked() {


this.onMenuBtnClick.emit()


//to resize sceen

setTimeout(() => {

  window.dispatchEvent( 

    new Event ('resize')
  )
  }
,100);



  }
  

}





