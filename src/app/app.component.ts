import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactapp';

  password;
  correctPassword = 'password';
  pwdCorrect = false;

  /* The password logic also allows database query to be made before user enters site, so information is ready for them. */
  addPassword() {
    if (this.password == this.correctPassword) {
      this.pwdCorrect = true;
    } else {
      alert("Incorrect password entered! Enter the word \"password\".");
    }
  }

}
