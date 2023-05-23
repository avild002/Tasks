// Clase Task

export const list = []; 

export class task {
    
    constructor (taskName,priorityTask) {
        this.name = taskName;
        this.priority = priorityTask
        this.state = "Sin completar"; 
    } 

    assignPriority(priorityTask) {
        this.priority = priorityTask;
    }

    assignState() {
        this.state = true;
    }

    getName() {
        return this.name;
    }
    
    getPriority() {
        return this.priority;
    }

    getState() {
        return this.state;
    }

    setName(taskName) {
        this.name = taskName; 

    } 

    setPriority(priorityTask) {
        this.priority = priorityTask;
    }

}