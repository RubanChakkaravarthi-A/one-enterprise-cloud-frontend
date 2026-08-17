import type {
  Attendance,
} from "../../types/attendance";



const STORAGE_KEY = "attendance";





export const getAttendance = (): Attendance[] => {


  const data =

    localStorage.getItem(
      STORAGE_KEY
    );



  if (!data) {

    return [];

  }



  return JSON.parse(data);


};









export const saveAttendance = (

  attendance: Attendance

): Attendance[] => {



  const existingData =

    getAttendance();







  const existingAttendance =

    existingData.find(

      (item)=>

        item.employeeId === attendance.employeeId &&

        item.date === attendance.date

    );









  let updatedData: Attendance[];









  if(existingAttendance){



    updatedData =

      existingData.map(

        (item)=>



          item.id === existingAttendance.id

          ?

          {

            ...item,

            ...attendance,

            id:item.id,

          }


          :

          item


      );



  }

  else{



    updatedData = [

      ...existingData,

      attendance,

    ];


  }









  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(updatedData)

  );







  return updatedData;



};









export const updateAttendance = (

  updatedAttendance: Attendance

): Attendance[] => {



  const existingData =

    getAttendance();









  const updatedData =

    existingData.map(

      (item)=>



        item.id === updatedAttendance.id

        ?

        {

          ...item,

          ...updatedAttendance,

        }


        :

        item



    );









  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(updatedData)

  );







  return updatedData;



};









export const deleteAttendance = (

  id:string

): Attendance[] => {



  const existingData =

    getAttendance();









  const updatedData =

    existingData.filter(

      (item)=>

        item.id !== id

    );









  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(updatedData)

  );







  return updatedData;



};