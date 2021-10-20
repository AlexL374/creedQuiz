import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    var correctCreed = "I believe in the Chi Phi Fraternity. From its triple origin, Chi Phi sets forth and maintains values that others in society have dared to compromise. Truth, Honor, and Personal Integrity are the foundations upon which Chi Phi is built. A man's word is his bond. Chivalrous behavior crosses the ages to touch the heart of Chi Phi. I believe in the friendship of Chi Phi. Whether on the road or in the Chapter house, the hand of Brotherhood is always extended. The strength obtained from the union of congenial minds is the backbone of the Fraternity. Our founders sought for nothing less. Finally, I believe in the future of the Chi Phi Fraternity because I believe in myself. When I put forth my best effort and combine that with the strength of my Brothers, we can achieve the victory of continual existence. As long as the Almighty permits, I will strive to better myself through the teachings of my Fraternity. Being a more aware citizen, a more able person, and a stronger Chi Phi shall be my reward.";
    var submission = (<HTMLTextAreaElement>document.getElementById("submission")).value;
    console.log(submission);
    if (submission == correctCreed) {
      (<HTMLElement>document.getElementById("popup-text")).innerHTML = "Right :)";
      (<HTMLElement>document.getElementById("popup-text")).style.color = "green";
      console.log("You got it right");
    }
    else {
      (<HTMLElement>document.getElementById("popup-text")).innerHTML = "Wrong :(";
      (<HTMLElement>document.getElementById("popup-text")).style.color = "red";
      console.log("You got it wrong");
    }
    (<HTMLDivElement>document.getElementById("result")).style.display = "block";
    //(<HTMLDivElement>document.getElementById("result-content")).style.opacity = "1";
    //(<HTMLDivElement>document.getElementById("result-content")).style.visibility = "visible";
    var correct_creed_div = (<HTMLDivElement>document.getElementById("compare-creed"));
    var counter = 0;
    var missing = 0;
    for (var i = 0; i < submission.length; ++i, ++counter) {
      while (submission[i].toUpperCase() != correctCreed[counter].toUpperCase()) {
        //Got word(s) completey wrong or completely missed a letter in spelling, etc
        var letterSpan = (<HTMLSpanElement>document.createElement('span'));
        correct_creed_div.appendChild(letterSpan);
        letterSpan.innerHTML = correctCreed[counter];
        letterSpan.style.color = "red";
        letterSpan.style.fontSize = "20px";

        if (counter == correctCreed.length) {
          console.log("There is a letter that is not recognized in the actual correct creed")
          i = submission.length;
          break;
        }
        else if (counter == 328 || counter == 586 || counter == 808) {
          var break1 = (<HTMLElement>document.createElement('br'));
          correct_creed_div.appendChild(break1);
          var break2 = (<HTMLElement>document.createElement('br'));
          correct_creed_div.appendChild(break2);
          console.log("break");
        }
        ++missing;
        ++counter;
      }
      var letterSpan = (<HTMLSpanElement>document.createElement('span'));
      correct_creed_div.appendChild(letterSpan);
      letterSpan.innerHTML = correctCreed[counter];
      if (submission[i] != correctCreed[counter]) {
        letterSpan.style.color = "blue";
      }
      else {
        letterSpan.style.color= "green";
      }
      letterSpan.style.fontSize = "20px";
      if (counter == 328 || counter == 586 || counter == 808) {
        var break1 = (<HTMLElement>document.createElement('br'));
        correct_creed_div.appendChild(break1);
        var break2 = (<HTMLElement>document.createElement('br'));
        correct_creed_div.appendChild(break2);
        console.log("break");
      }
    }
    if (counter != correctCreed.length) {
      while (counter < correctCreed.length) {
        var letterSpan = (<HTMLSpanElement>document.createElement('span'));
        correct_creed_div.appendChild(letterSpan);
        letterSpan.innerHTML = correctCreed[counter];
        letterSpan.style.color = "red";
        letterSpan.style.fontSize = "20px";
        if (counter == 328 || counter == 586 || counter == 808) {
          var break1 = (<HTMLElement>document.createElement('br'));
          correct_creed_div.appendChild(break1);
          var break2 = (<HTMLElement>document.createElement('br'));
          correct_creed_div.appendChild(break2);
          console.log("break");
        }
        ++missing;
        ++counter;
      }
    }
    console.log("You got " + missing + " letters missing. ");
    var not_popup_elements = document.getElementsByClassName("not-popup");
    for (var i = 0; i < not_popup_elements.length; ++i) {
      (<HTMLElement>not_popup_elements[i]).style.opacity = "0.2";
    }
  }

  reset() {
    (<HTMLTextAreaElement>document.getElementById("submission")).value = "";
  }

  showCreed() {
    console.log("Show Creed")

  }

  close() {
    (<HTMLDivElement>document.getElementById("result")).style.display = "none";
    //(<HTMLDivElement>document.getElementById("result-content")).style.opacity = "0";
    //(<HTMLDivElement>document.getElementById("result-content")).style.visibility = "hidden";
    console.log("Close popup");
    var correct_creed_div = (<HTMLDivElement>document.getElementById("compare-creed"));
    while (correct_creed_div.firstChild) {
      correct_creed_div.removeChild(correct_creed_div.firstChild);
    }
    var not_popup_elements = document.getElementsByClassName("not-popup");
    for (var i = 0; i < not_popup_elements.length; ++i) {
      (<HTMLElement>not_popup_elements[i]).style.opacity = "1";
    }
  }

}
