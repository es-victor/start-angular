import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Application Name'
  sayHelloId ="para_id"
  fontColor = 'blue'
  errorColor = 'red'
  successColor = '#0f0'
  bgColor = "#ccc"
  fontSize = '28px'
  className = "para_class"
  canClick = false
  sayMessage(){
    alert(this.title)
  }

  editStatusMessage = "You can edit me"
  enableEdit = true
  onChangeEditStatus(){
    if(this.enableEdit){this.editStatusMessage = "You can not edit me!"}
    else{this.editStatusMessage = "You can edit me"}
    this.enableEdit = !this.enableEdit
  }
}
