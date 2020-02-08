import { Component } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDVpqU0dPm4BsKsoVLjGNDYdEXGFH1Tr9Y",
      authDomain: "angularblog-9eeea.firebaseapp.com",
      databaseURL: "https://angularblog-9eeea.firebaseio.com",
      projectId: "angularblog-9eeea",
      storageBucket: "angularblog-9eeea.appspot.com",
      messagingSenderId: "964068741207",
      appId: "1:964068741207:web:6b3591123dbdd8b6e25312",
      measurementId: "G-0349QQME7B"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
