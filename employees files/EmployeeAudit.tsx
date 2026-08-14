import { useEffect, useState } from "react";

type Audit = {
  id: string;
  action: string;
  employee: string;
  details: string;
  date: string;
};

const EmployeeAudit = () => {

  const [auditLogs, setAuditLogs] = useState<Audit[]>([]);

  useEffect(() => {

    const storedAudit = localStorage.getItem("employeeAudit");

    if(storedAudit){
      setAuditLogs(JSON.parse(storedAudit));
    }

  },[]);


  return (
    <section className="audit-section">

      <h1>Employee Audit</h1>

      <p>
        Employee activity and changes history.
      </p>


      {
        auditLogs.length === 0 ? (

          <h3>No Audit Records Found</h3>

        ) : (

          <table>

            <thead>
              <tr>
                <th>Action</th>
                <th>Employee</th>
                <th>Details</th>
                <th>Date</th>
              </tr>
            </thead>


            <tbody>

              {
                auditLogs.map((log)=>(
                  <tr key={log.id}>

                    <td>{log.action}</td>

                    <td>{log.employee}</td>

                    <td>{log.details}</td>

                    <td>{log.date}</td>

                  </tr>
                ))
              }

            </tbody>


          </table>

        )
      }


    </section>
  );
};


export default EmployeeAudit;