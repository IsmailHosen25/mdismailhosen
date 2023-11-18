import styles from './Project.module.css'
import InHeading from "../In_heading/InHeading";

import {PiGithubLogo} from 'react-icons/pi'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

export default function Project({exptimeline}) {

  return (
    <div className={styles.projects_m}>
        <div className={styles.projects_heading}>
            <InHeading heading={"Projects"} subheading={"_My"} subcolor={"Work"}/>
            <p>Check out some of my work right here.</p>
        </div>
        <VerticalTimeline lineColor='#26A8FE'>
            {exptimeline.map((item,index)=>
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'black', color: '#26A8FE' ,border:"2px solid #26A8FE",boxShadow:"none"}}
                  contentArrowStyle={{ borderRight: '7px solid  #26A8FE' }}
                  iconStyle={{ background: '#000', color: '#fff',boxShadow:"none", border:"4px solid #26A8FE"}}
                  icon={item.icon}
                  date={item.date}
                  dateClassName={styles.date}
                  
                >
                <div className={styles.exp_box}>
                   <img className={styles.exp_img} src={item.img}/>
                   <div className={styles.projectinfo}>
                      <h1>// {item.title}</h1>
                      <div className={styles.members}>
                        {item.member?.map((item,index)=><img onClick={()=>window.open(`${item.link}`)} key={index} src={item.img} className={styles.avatar}/>)}
                         
                      </div>
                   </div>
                   <button className={styles.timeline_btn} onClick={()=>window.open(item.link)}>{`.( `}Source Code<PiGithubLogo/> {` )`}</button>
                </div>

                </VerticalTimelineElement>
            )}

        </VerticalTimeline>
        
    </div>
  )
}
