// console.log("hello");

import { Command, CommandDeleteTodos, CommandNewTodos, CommandPrintTodos } from "./Command";
import { waitForInput } from "./input";
import Todo from "./Todo";
import { Action, AppState, Priority } from "./type";

const commands: Command[] = [
    new CommandPrintTodos(),
    new CommandNewTodos(),
    new CommandDeleteTodos()
];

async function main() {
    let state: AppState = {
        todos: [
            new Todo('test1', Priority.High),
            new Todo('test2', Priority.Medium),
            new Todo('test3', Priority.Low),
        ]
    }
    while (true) {
        console.clear();
        for(const command of commands){
            console.log(command.toStirng());
        }
        console.log()
        const key = await waitForInput('input command: ' )
        console.log()
        const command = commands.find(item => item.key === key);
        if(command) {
            const action = await command.run(state);
            if(action) {
                state = getNextState(state, action);
            }
        }
        // console.log('key:', key)
    }
   
}
main();

function getNextState(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'newTodo':
            return {
                // 불변 객체로 관리 하기 위해
                ...state,
                todos: [...state.todos, new Todo(action.title, action.priority)],                
            };
            case 'deleteTodo':
            return {
                // 불변 객체로 관리 하기 위해
                ...state,
                todos: state.todos.filter(item => item.id !== action.id),          
            };
    }   
}