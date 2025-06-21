import { Priority, PRIORITY_NAME_MAP } from "./type";

export  default class Todo {
    // 자동 증가
    static nextId: number = 1;
    constructor(
        private title: string, 
        private priority: Priority, 
        public id: number = Todo.nextId,
    ) {
        Todo.nextId++;
    } 
    toString() {
        return `${this.id}) 제목: ${this.title} (우선 순위 : ${PRIORITY_NAME_MAP[this.priority]})`;
    }
}
