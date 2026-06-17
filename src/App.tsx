import './App.css'
import {useState} from "react";

function App() {
  type ApplicationState = "Applied" | "Ongoing" | "Declined" | "Success";
  type JobApplication = {
    roleName: string;
    companyName: string;
    applicationState: ApplicationState;
    applicationDate: Date;
    latestUpdate: Date;
  }
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [roleText, setRoleText] = useState("");
  const [companyText, setCompanyText] = useState("");

  function addJob() {
    if (!roleText.trim()) return;
    if (!companyText.trim()) return;

    setJobs([...jobs, {roleName: roleText, companyName: companyText, applicationState: "Applied", applicationDate: new Date(), latestUpdateDate: new Date()}])
    setRoleText("");
    setCompanyText("");
  }
  return (
      <div>
        <h1>Jobtracker</h1>
        <input value={roleText}
               onChange={(e) => setRoleText(e.target.value)}
               placeholder="Role Name"
               />
        <input value={companyText}
        onChange={(e) => setCompanyText(e.target.value)}
        placeholder="Company Name"/>
        <button onClick={addJob}>Add Job</button>
      </div>
  )
}

export default App
