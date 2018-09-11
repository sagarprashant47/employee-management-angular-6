import { Employee } from './employee.model';

export interface Department {
    Id: number;
    Name: string;
    Employees: Employee[];
}
