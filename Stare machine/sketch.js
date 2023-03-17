let bSubmit, bResolve, bReject;
let stateMachine;

function setup() {
  createCanvas(400, 400);
  stateMachine = new StateMachine();
  frameRate(10);
}

function draw() {
  background(210);
  view(stateMachine);
}

//Model
class StateMachine {
  constructor() {
    this.currentState = "idle";
    this.timer = 0;
  }

  transition(event) {
    clearTimeout(this.timer);
    switch (this.currentState) {
      case "idle":
        if (event == "Hop") {
          this.currentState = "Hopper";
        } else if (event == "dukke") {
          this.currentState = "dukker";
        } else if (event == "Vens") {
          this.currentState = "Venstre";
        } else if (event == "Høj") {
          this.currentState = "Højre";
        }
        break;
      case "Hopper":
        if (event === "fald") {
          this.currentState = "falder";
          this.timer = setTimeout(() => {
            this.transition("stop");
          }, 1000);
        }
        break;
      case "falder":
        if (event === "stop") {
          this.currentState = "idle";
        }

        break;
      case "dukker":
        if (event == "dukker sig ikke") {
          this.currentState = "idle";
        }
        break;
      case "Venstre":
        if (event == "stop") {
          this.currentState = "idle";
        }
        break;
      case "Højre":
        if (event === "stop") {
          this.currentState = "idle";
        }
        break;
      default:
        // This should never occur
        this.currentState = undefined;
    }
  }
}

//View - This could be made to a class also
function view(model) {
  text("The current state is: " + model.currentState, 100, 200);
}

//Controller - This could be made to a class also
function keyPressed() {
  switch (keyCode) {
    case 65:
      stateMachine.transition("Vens");
      break;
    case 68:
      stateMachine.transition("Høj");
      break;
    case 87:
      stateMachine.transition("Hop");
      break;
    case 83:
      stateMachine.transition("dukke");
      break;
  }
}
function keyReleased() {
  switch (keyCode) {
    case 65:
      stateMachine.transition("stop");
    case 68:
      stateMachine.transition("stop");
      break;
    case 83:
      stateMachine.transition("dukker sig ikke");
      break;
    case 87:
      stateMachine.transition("fald");
      break;
  }
}
