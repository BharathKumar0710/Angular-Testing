import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Todo List";
  todo = [
    {
      tasks: "Add ToDoList immediately",
      status: false
    },
    {
      tasks: "Work on the Task",
      status: true
    },
    {
      tasks: "Work on the Task",
      status: true
    }
  ];
}
