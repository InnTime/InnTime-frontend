export interface ICourse {
    id: number;
    name: string;
    room: 1;
    teacher: string;
    start_time: string;
    end_time: string;
    day_of_week: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
}