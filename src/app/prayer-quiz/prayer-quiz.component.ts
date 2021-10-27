import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayer-quiz',
  templateUrl: './prayer-quiz.component.html',
  styleUrls: ['./prayer-quiz.component.css']
})
export class PrayerQuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    var correctCreed = "Almighty Father, who dost vouchsafe to direct those who acknowledge Thee in all their ways, look, we beseech Thee, with favor upon our Fraternity. Make it a blessing and a benefit to all its members. Deliver us from those evils to which we may be at any time exposed. Grant us the light of Thy truth and the illumination of Thy spirit that we may always do that which is acceptable in Thy Sight. Unite us in the bonds of love. Keep us in charity with all mankind. Incline our hearts to walk humbly before Thee and help us so to acquit ourselves in this life that we may dwell with Thee in life everlasting. Amen.";
    var submission = (<HTMLTextAreaElement>document.getElementById("submission")).value.replace(/\n/g, '');
    console.log(submission);
    var testSubmission = submission.replace(/\s/g, '');
    var testCreed = correctCreed.replace(/\s/g, '');
    if (testSubmission.toUpperCase() == testCreed.toUpperCase()) {
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
        else if (counter == 606) {
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
      if (counter == 606) {
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
        if (counter == 606) {
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

  switchCreed() {
    window.location.href="";
  }

}
