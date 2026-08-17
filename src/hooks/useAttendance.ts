import {
  useEffect,
  useState,
} from "react";


import type {
  Attendance,
} from "../types/attendance";


import {
  getAttendance,
  saveAttendance,
  updateAttendance as updateAttendanceAPI,
  deleteAttendance as deleteAttendanceAPI,
} from "../services/api/attendanceApi";




function useAttendance() {



  const [attendance, setAttendance] =
    useState<Attendance[]>([]);







  const loadAttendance = () => {


    const data =
      getAttendance();


    setAttendance(data);


  };









  useEffect(() => {


    loadAttendance();


  }, []);









  const addAttendance = (

    item: Attendance

  ) => {


    const updatedData =
      saveAttendance(item);


    setAttendance(updatedData);


  };









  const updateAttendance = (

    item: Attendance

  ) => {


    const updatedData =
      updateAttendanceAPI(item);


    setAttendance(updatedData);


  };









  const deleteAttendance = (

    id: string

  ) => {


    const updatedData =
      deleteAttendanceAPI(id);


    setAttendance(updatedData);


  };









  return {


    attendance,


    addAttendance,


    updateAttendance,


    deleteAttendance,


    refreshAttendance:
      loadAttendance,


  };



}



export default useAttendance;