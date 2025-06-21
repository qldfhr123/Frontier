import { waitForInput } from "./input";
import { Action, ActionDeleteTodo, ActionNewTodo, AppState, Priority, PRIORITY_NAME_MAP } from "./type";
import { getIsValidEnumValue } from "./util";

export abstract class Command {
    constructor(public key: string, private desc: string ){}
    toStirng() {
        return `${this.key}: ${this.desc}`;
    }

    abstract run(state: AppState): Promise<void | Action>
}

export class CommandPrintTodos extends Command {
    constructor() {
        super('p', '모든 할 일 출력하기')
    }
    async run(state: AppState): Promise<void> {
        for( const todo of state.todos) {
            const text = todo.toString();
            console.log(text);
        }
        await  waitForInput('press any key');
    }
}

export class CommandNewTodos extends Command {
    constructor() {
        super('n', '할 일 추가하기')
    }
    async run(state: AppState): Promise<void | ActionNewTodo> {      
       const title =  await  waitForInput('title: ');
       // 0 ~ 2까지 중요도 메시지 표시
       const priorityStr = await waitForInput(`priority ${PRIORITY_NAME_MAP[Priority.High]}(${Priority.High}) ~ ${PRIORITY_NAME_MAP[Priority.Low]}(${Priority.Low}): `);
       const priority = Number(priorityStr); 
       // 빈문자열 감시
       if (title && CommandNewTodos.getIsPriority(priority)){
        // 앱 상태 변경
        return {
            type: 'newTodo',
            title,
            priority
        };
       }
    }
    static getIsPriority(priority: number): priority is Priority {
        return getIsValidEnumValue(Priority, priority);
    }
}

export class CommandDeleteTodos extends Command {
    constructor() {
        super('d', '할 일 삭제')
    }
    async run(state: AppState): Promise<void | ActionDeleteTodo> {      
        for( const todo of state.todos) {
            const text = todo.toString();
            console.log(text)
        }
       const idStr =  await  waitForInput('press todo id to delte: ');
       const id = Number(idStr);
       return {
        type: 'deleteTodo',
        id,
       }
       
    }
    static getIsPriority(priority: number): priority is Priority {
        return getIsValidEnumValue(Priority, priority);
    }
}