export type LeaveStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Cancelled";


export type LeaveType =
  | "Casual Leave"
  | "Sick Leave"
  | "Earned Leave"
  | "Emergency Leave";



export interface LeaveRequest {

  id: string;


  employeeId: string;


  employeeName: string;


  department: string;


  designation?: string;


  leaveType: LeaveType;


  fromDate: string;


  toDate: string;


  totalDays: number;


  reason: string;


  status: LeaveStatus;


  appliedDate: string;

}