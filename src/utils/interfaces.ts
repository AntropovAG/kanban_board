export interface Task {
    id: number;
    title: string;
    description: string;
};

export interface Data {
    backlog: Task[];
    ready: Task[];
    inProgress: Task[];
    finished: Task[];
};