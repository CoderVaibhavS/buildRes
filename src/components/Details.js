import React, { useEffect, useState } from 'react'
import './Details.css'

export default function Details(props) {

    const [form, setForm] = useState({
        fname: "",
        lname: "",
        contact: "",
        email: "",
        city: "",
        state: "",
        pin: "",
        deg: "",
        inst_name: "",
        inst_city: "",
        inst_state: "",
        prof_sum: ""
    });

    const [skills, setSkills] = useState([""]);
    const [affls, setAffls] = useState([""])

    const [work, setWork] = useState([{
        role: "",
        c_name: "",
        c_city: "",
        c_state: ""
    }]);

    const handleOnchange = (event) => {
        setForm(form => ({ ...form, [event.target.name]: event.target.value }));
    }

    const updateSkills = (event, idx) => {
        setSkills((skills) => {
            let newSkills = [...skills];
            newSkills[idx] = event.target.value;
            return newSkills;
        });
    }

    const updateAffls = (event, idx) => {
        setAffls((affls) => {
            let newAffls = [...affls];
            newAffls[idx] = event.target.value;
            return newAffls;
        })
    }

    const updateWork = (event, idx) => {
        setWork((work) => {
            let newWork = [...work];
            newWork[idx] = event.target.value;
            return newWork
        })
    }

    const updateWorkDet = (event, idx, a) => {
        setWork((work) => {
            let newWork = [...work];
            // let a = event.target.name;
            newWork[idx].a = event.target.value;
            return newWork
        })
    }

    const addSkill = () => {
        setSkills((skills) => [...skills, ""]);
    }

    const addAffl = () => {
        setAffls((affls) => [...affls, ""]);
    }

    const addWork = () => {
        setWork((work) => [...work, {}]);
    }

    useEffect(() => {
        props.updater(form);
    }, [form])

    useEffect(() => {
        props.updaterSkills(skills);
    }, [skills])

    useEffect(() => {
        props.updaterAffls(affls);
    }, [affls]);

    useEffect(() => {
        props.updaterWork(work);
    }, [work])

    return (
        <div className="form">
            <h1>Personal Details</h1>
            <form action="">
                <div className="form_div">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='First Name' name="fname" value={form.fname} onChange={handleOnchange} required />
                </div>

                <div className="form_div">
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Last Name' name="lname" value={form.lname} onChange={handleOnchange} required />
                </div>

                <div className="form_div">
                    <label htmlFor="">Contact No.</label>
                    <input type="tel" placeholder='Contact No.' name='contact' value={form.contact} onChange={handleOnchange} required />
                </div>

                <div className="form_div">
                    <label htmlFor="">Email Address</label>
                    <input type="email" placeholder='Email Address' name='email' value={form.email} onChange={handleOnchange} required />
                </div>

                <div className="form_div">
                    <label htmlFor="">City</label>
                    <input type="text" placeholder='City' name="city" value={form.city} onChange={handleOnchange} required />
                </div>

                <div className="form_div">
                    <label htmlFor="">State</label>
                    <input type="text" placeholder='State' name="state" value={form.state} onChange={handleOnchange} required />
                </div>

                <div className="form_div">
                    <label htmlFor="">Pincode</label>
                    <input type="number" placeholder='Pincode' name="pin" value={form.pin} onChange={handleOnchange} required />
                </div>
            </form>

            <h1>Education</h1>
            <form action="">
                <div className="form_div">
                    <label htmlFor="">Degree</label>
                    <input type="text" placeholder='Degree' name="deg" value={form.deg} onChange={handleOnchange} required />
                </div>

                <div className="form_div">
                    <label htmlFor="">Institute Name</label>
                    <input type="text" placeholder='Institute Name' name="inst_name" value={form.inst_name} onChange={handleOnchange} required />
                </div>

                <div className="form_div">
                    <label htmlFor="">City</label>
                    <input type="text" placeholder='City' name="inst_city" value={form.inst_city} onChange={handleOnchange} required />
                </div>

                <div className="form_div">
                    <label htmlFor="">State</label>
                    <input type="text" placeholder='State' name="inst_state" value={form.inst_state} onChange={handleOnchange} required />
                </div>
            </form>

            <h1>Your Skills</h1>
            <form action="" className='skills'>
                {/* <div className="add_div"> */}
                {skills.map((skill, idx) => <input type="text" placeholder='Add your skill' value={skill} key={idx} onChange={(evt) => { updateSkills(evt, idx) }} />)}
                <button type='button' className='add' onClick={addSkill}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z" /></svg></button>
                {/* </div> */}
            </form>

            <form action="" id='txtarea'>
                <textarea id="" cols="30" rows="4" placeholder='Write Your Professional Summary' name="prof_sum" value={form.prof_sum} onChange={handleOnchange} required></textarea>
            </form>

            <h1>Work History</h1>
            <button type='button' className='add' onClick={addWork}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z" /></svg></button>

            {work.map((work_det, idx) =>
                <form value={work_det} key={idx} onChange={(evt) => { updateWork(evt, idx) }}>
                    <div className='form_div'>
                        <label htmlFor="">Company Name</label>
                        <input type="text" placeholder='Company Name' name="role" value={work_det.role} onChange={(evt) => { updateWorkDet(evt, idx, 'role') }} />
                    </div>

                    <div className='form_div'>
                        <label htmlFor="">Role</label>
                        <input type="text" placeholder='Role' />
                    </div>


                    <div className='form_div'>
                        <label htmlFor="">Started Working</label>
                        <input type="date" />
                    </div>

                    <div className='form_div'>
                        <label htmlFor="">Worked Till</label>
                        <input type="date" />
                    </div>

                    <div className="form_div">
                        <label htmlFor="">City</label>
                        <input type="text" placeholder='City' />
                    </div>

                    <div className="form_div">
                        <label htmlFor="">State</label>
                        <input type="text" placeholder='State' />
                    </div>
                    {/* 
                <div className="form_div">
                    <label htmlFor="">Share Your Experience</label>
                    <input type="text" placeholder='Experience'/>
                </div> */}

                </form>)}

            <h1>Affiliations</h1>
            <form action="" className='affls'>
                {affls.map((affl, idx) => <input type="text" placeholder='Add affliation' value={affl} key={idx} onChange={(evt) => { updateAffls(evt, idx) }} />)}
                <button type='button' className='add' onClick={addAffl}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z" /></svg></button>
            </form>


        </div>
    )
}