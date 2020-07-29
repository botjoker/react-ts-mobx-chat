import { observable, action, decorate } from "mobx";
import { IChatMessage } from "./Interfaces"


export default class AppState {
  users = [
    "Bill",
    "Charlie",
    "Percy",
    "Fred"
  ]

  messages: IChatMessage[] = []

  
  chatInput(user: string, message: string) {
    this.messages.push({id: Math.random()*100, user, message})
  }
}

decorate (AppState, {
  users: observable,
  messages: observable,
  chatInput: action
});