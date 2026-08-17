import {
  useEffect,
  useState,
} from "react";


import type {
  LeaveRequest,
  LeaveStatus,
} from "../types/leave";


import {

  getLeaveRequests,

  createLeaveRequest,

  updateLeaveStatus,

  updateLeaveRequest,

  deleteLeaveRequest,

} from "../services/api/leaveApi";





function useLeave() {



  const [leaveRequests,setLeaveRequests] =

    useState<LeaveRequest[]>([]);







  const loadLeaves = () => {


    const data =

      getLeaveRequests();



    setLeaveRequests(data);


  };









  useEffect(()=>{


    loadLeaves();


  },[]);









  const addLeave = (

    leave: LeaveRequest

  )=>{


    const updatedData =

      createLeaveRequest(
        leave
      );


    setLeaveRequests(
      updatedData
    );


  };









  const changeLeaveStatus = (

    id:string,

    status:LeaveStatus

  )=>{


    const updatedData =

      updateLeaveStatus(

        id,

        status

      );



    setLeaveRequests(
      updatedData
    );


  };









  const editLeave = (

    leave:LeaveRequest

  )=>{


    const updatedData =

      updateLeaveRequest(
        leave
      );



    setLeaveRequests(
      updatedData
    );


  };









  const removeLeave = (

    id:string

  )=>{


    const updatedData =

      deleteLeaveRequest(
        id
      );


    setLeaveRequests(
      updatedData
    );


  };









  return {


    leaveRequests,


    addLeave,


    changeLeaveStatus,


    editLeave,


    removeLeave,


    refreshLeaves:
      loadLeaves,


  };


}





export default useLeave;