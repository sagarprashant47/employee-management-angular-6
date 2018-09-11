export enum Gender {
    Male,
    Female
}

export interface Employee {
    Id: number;
    Name: string;
    Gender: Gender;
    Salary: number;
    ProfilePic: string;
    DepartmentId: number;
}
