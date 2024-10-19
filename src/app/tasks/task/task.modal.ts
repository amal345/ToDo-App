export interface ITask {
    id: string;
    userId: string;
    title: String;
    summary: string;
    dueDate: string
}

export interface INewTaskData {
    title: string;
    summary: string;
    dueDate: string;
}