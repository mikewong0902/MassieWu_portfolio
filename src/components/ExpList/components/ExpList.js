import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import StarIcon from '@material-ui/icons/Star'

const ExpList = () => {
  return (
    <div>
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(232, 159, 193)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(232, 159, 193)',
          }}
          date="2021 - present"
          iconStyle={{ background: 'rgb(232, 159, 193)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Math Teacher</h3>
          <h4 className="vertical-timeline-element-subtitle">AmazingTalker</h4>
          <p>Teaching Maths at any level</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(232, 159, 193)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(232, 159, 193)',
          }}
          date="2019 - 2019"
          iconStyle={{ background: 'rgb(232, 159, 193)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Lab Demonstrator</h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Glasgow
          </h4>
          <p>Lab demonstration, guide student on Power Electronics 3 lab.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(231, 158, 192)', color: '#fff' }}
          contentArrowStyle={{
            borderRight: '7px solid  rgb(232, 159, 193)',
          }}
          date="2016 - 2019"
          iconStyle={{ background: 'rgb(232, 159, 193)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Teacher</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Glasgow Kelvin College
          </h4>
          <p>Teacher</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

ExpList.displayName = 'ExpList'
export default ExpList
