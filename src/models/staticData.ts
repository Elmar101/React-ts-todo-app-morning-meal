import { TodoItem } from "./todoItem";

export class Model {
    name: string;
    items: TodoItem[];
    constructor(){
        this.name = "Elmar";
        this.items = [
            {description: 'Seher Yemeyi', action: 'he'},
            {description: 'Seher Bazarliqi', action: 'he'},
            {description: 'Seher Idmani', action: 'yox'},
        ]
    }
}