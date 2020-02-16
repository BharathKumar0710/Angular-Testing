import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "My Todo List";

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
      tasks: "Complete the task",
      status: false
    }
  ];

  addTodo(newTodoLabel) {
    var newTodo = {
      tasks: newTodoLabel,
      status: false
    };
    this.todo.push(newTodo);
  }
}
