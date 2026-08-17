import type {
  LeaveRequest,
  LeaveStatus,
} from "../../types/leave";


const STORAGE_KEY = "leaveRequests";




// Get all leave requests

export const getLeaveRequests = (): LeaveRequest[] => {


  const data =
    localStorage.getItem(
      STORAGE_KEY
    );


  if(!data){

    return [];

  }


  return JSON.parse(data);

};







// Create new leave request

export const createLeaveRequest = (

  leaveRequest: LeaveRequest

): LeaveRequest[] => {


  const existingData =
    getLeaveRequests();



  const updatedData = [

    ...existingData,

    leaveRequest,

  ];



  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(updatedData)

  );



  return updatedData;


};








// Update leave status

export const updateLeaveStatus = (

  id: string,

  status: LeaveStatus

): LeaveRequest[] => {



  const existingData =
    getLeaveRequests();




  const updatedData =

    existingData.map(

      (leave)=>

        leave.id === id

        ?

        {

          ...leave,

          status,

        }

        :

        leave

    );





  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(updatedData)

  );





  return updatedData;


};








// Update complete leave request

export const updateLeaveRequest = (

  updatedLeave: LeaveRequest

): LeaveRequest[] => {



  const existingData =
    getLeaveRequests();




  const updatedData =

    existingData.map(

      (leave)=>

        leave.id === updatedLeave.id

        ?

        updatedLeave

        :

        leave

    );





  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(updatedData)

  );





  return updatedData;


};








// Delete leave request

export const deleteLeaveRequest = (

  id:string

): LeaveRequest[] => {



  const existingData =
    getLeaveRequests();




  const updatedData =

    existingData.filter(

      (leave)=>

        leave.id !== id

    );





  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(updatedData)

  );





  return updatedData;


};