import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import logo from './logo.svg';
import './App.css';
import Template from './components/Template';
import Details from './components/Details';

function App() {

  let [form, setForm] = useState({});
  let [skills, setSkills] = useState([""]);
  let [work, setWork] = useState([{}]);
  let [affls, setAffls] = useState([""]);

  return (
    <>
      <div className="app_div">
        <Details id="details" updater={setForm} updaterSkills={setSkills} updaterWork={setWork} updaterAffls={setAffls} />
        <Template fname={form.fname === undefined ? "" : form.fname} 
                  lname={form.lname === undefined ? "" : form.lname}
                  contact={form.contact === undefined ? "" : form.contact}
                  email={form.email === undefined ? "" : form.email}
                  city={form.city === undefined ? "" : form.city}
                  state={form.state === undefined ? "" : form.state}
                  pin={form.pin === undefined ? "" : form.pin}
                  deg={form.deg === undefined ? "" : form.deg}
                  inst_name={form.inst_name === undefined ? "" : form.inst_name}
                  inst_city={form.inst_city === undefined ? "" : form.inst_city}
                  inst_state={form.inst_state === undefined ? "" : form.inst_state}
                  prof_sum={form.prof_sum === undefined ? "" : form.prof_sum}
                  skills={skills === undefined ? [""] : skills}
                  work={work === undefined ? [{}] : work}
                  affls={affls === undefined ? [""] : affls} />
        
      </div>
    </>
  );
}

export default App;
