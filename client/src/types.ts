export type Quadrant = {
    id: number;
    title: string;
    primary_color: string;
    neutral_color: string;
};

export type Todo = {
    id: number;
    quadrant_id: number;
    title: string;
    isDone: boolean;
    due_date: string;
    note: string;
}

export type TodoInput = {
    title: string;
    priority: number;
    urgency: number;
    due_date: string;
    note: string;
}