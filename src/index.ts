import "./styles.css";
import data from "./data.json";
// import todo from './todo.json';

// Defining our Todo class
class Todo {
  userId: number;
  id: number;
  title: string;
  done: boolean;
  update_id: number;
  message_id: number;
  date: number;

  getTitle() {
    return this.title;
  }

  isDone() {
    return this.done;
  }
  updateID() {
    return this.update_id;
  }
  messageID() {
    return this.message.message_id;
  }
  getDate() {
    return this.message.date;
  }
}

// Object.assign() will clone jsonData into
// Todo class object Storing the new class
// object in a typescript variable
let newTodo = Object.assign(new Todo(), todo);

// Logging the output onto the console
console.log(newTodo);
console.log(newTodo.getTitle());
console.log(newTodo.updateID());
console.log(newTodo.messageID());
console.log(newTodo.getDate());
