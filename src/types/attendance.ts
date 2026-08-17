export type AttendanceStatus =
  | "Present"
  | "Absent"
  | "Half Day"
  | "WFH";



export interface Attendance {


  id: string;


  employeeId: string;


  employeeName: string;


  department: string;


  date: string;


  status: AttendanceStatus;


}