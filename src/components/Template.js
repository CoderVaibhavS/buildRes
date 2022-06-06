import React, { Component, forwardRef } from 'react'
import TemplateStyle from './Template.module.css'

export default function Template(props) {
    let upFName = props.fname.toUpperCase();
    let upLName = props.lname.toUpperCase();

    return (
        <>
        <div className={TemplateStyle.template} id={TemplateStyle.template}>
            <div className={TemplateStyle.pageDivide}>
                <div className={TemplateStyle.pageleft}>
                    <div>
                    <h1 className={TemplateStyle.name} id={TemplateStyle.name}> {(props.fname === '' ? 'JAMES' : upFName) + ' ' + (props.lname === '' ? 'STELE' : upLName)}</h1>
                    
                    <div className={TemplateStyle.profsum} id={TemplateStyle.profsum}>
                        <h3>PROFESSIONAL SUMMARY</h3>
                        <p>{props.prof_sum === '' ? 'Technically-sound Application Engineer effective in analyzing relevant information and guiding product cycle from conception to completion. Manages design effort and guides installation process for on-schedule product launches. Consults with internal and external clientele and employs additional system resources to review and enhance configuration for optimal customer satisfaction.' : props.prof_sum}</p>
                    </div>

                    <div className={TemplateStyle.workhis} id={TemplateStyle.workHis}>
                        <h3>WORK HISTORY</h3>
                        {/* <div id={TemplateStyle.work_1}>
                            <p><b>Application Engineer</b>, 08/2020 - Current</p>
                            <p>Deluxe, Atlanta, GA</p>
                            <ul>
                                <li>Demonstrate proposed design solutions by preparing and presenting CAD layouts for system concepts.</li>
                                <li>Work with the Special Projects team and two external suppliers to prepare design specifications following project goals.</li>
                                <li>Generate EQ cost estimates, including peripheral equipment, FL materials, assembly labor, and more.</li>
                            </ul>
                        </div> */}
                        {/* {props.work.map((work_det) =>  */}
                            <div id={TemplateStyle.work_1}>
                                <p><b>Application Engineer</b>, 08/2020 - Current</p>
                                <p>Deluxe, Atlanta, GA</p>
                                <ul>
                                    <li>Demonstrate proposed design solutions by preparing and presenting CAD layouts for system concepts.</li>
                                    <li>Work with the Special Projects team and two external suppliers to prepare design specifications following project goals.</li>
                                    <li>Generate EQ cost estimates, including peripheral equipment, FL materials, assembly labor, and more.</li>
                                </ul>
                        </div>
                        {/* // )} */}
                            
                        <div id={TemplateStyle.work_2}>
                            <p><b>Application Engineer</b>, 03/2020 - 08/2020</p>
                            <p>Tech USA, Atlanta, GA</p>
                            <ul>
                                <li>Analyzed, designed, developed, and tested robotics systems according to CAD drawings, written instructions, other specifications.</li>
                                <li>Created written propsals, outlining the precise scope of work and proposed engineering solutions, specific deliverables, operation descriptions.</li>
                                <li>Consulted with and later supervised a larger 25-member engineering team to ensure I met the specified design criteria.</li>
                            </ul>
                        </div>
                            
                        <div id={TemplateStyle.work_3}>
                            <p><b>Field Application Engineer</b>, 06/2012 - 05/2020</p>
                            <p>Aerotek, Atlanta, Georgia</p>
                            <ul>
                                <li>Fabricated, assembled, and tested mechanical components exclusively for use in outdoor environments; presented modified CAD specs to mechanical engineers.</li>
                                <li>Answered client and customer questions via phone and email; made-in-person service calls providing further assistance.</li>
                                <li>Reported on-site for final product delivery, assisted with unboxing, setup, preliminary troubleshooting.</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className={TemplateStyle.pageright}>
                    <div>
                    <div className={TemplateStyle.details} id={TemplateStyle.details}>
                        <div className={TemplateStyle.icon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg><p>{(props.city === '' ? 'Atlanta' : props.city) + ', ' + (props.state === '' ? 'GA' : props.state) + ' ' + (props.pin === '' ? 30301 : props.pin)}</p></div>
                        <div className={TemplateStyle.icon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg><p>{props.contact === '' ? 555555555 : props.contact}</p></div>
                        <div className={TemplateStyle.icon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg><p>{props.email === '' ? 'example@example.com' : props.email}</p></div>
                    </div>

                    <div className={TemplateStyle.skills} id={TemplateStyle.skills}>
                        <h2>SKILLS</h2>
                        <ul className='skills_ul'>
                            {props.skills.map((skill) => <li>{skill.length === 0 && props.skills[0] === skill ? 'Virtualization technologies' : skill}</li>)}
                        </ul>
                    </div>

                    <div className={TemplateStyle.edu} id={TemplateStyle.edu}>
                        <h2>EDUCATION</h2>
                        <p><b>{props.deg === '' ? 'Ph.D.' : props.deg}</b></p>
                        <p>{(props.inst_name === '' ? 'Massachusetts Institute Of Technology' : props.inst_name) + '-' + (props.inst_city === '' ? 'Cambridge' : props.inst_city) + ', ' + (props.inst_state === '' ? 'MA' : props.inst_state)}</p>
                    </div>

                    <div className={TemplateStyle.aff} id={TemplateStyle.aff}>
                        <h2>AFFILIATIONS</h2>
                        <ul>
                            {props.affls.map((affl) => <li>{affl.length === 0 && props.affls[0] === affl ? 'American Society of Civil Engineers (ASCE)' : affl}</li>)}
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};