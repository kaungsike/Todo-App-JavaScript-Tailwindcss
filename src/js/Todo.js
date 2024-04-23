import listeners from "./core/listener.js";

class Todo {
    init(){
        console.log("Todo App Start!");
        listeners();
    }
}

export default Todo;