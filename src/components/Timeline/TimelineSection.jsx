import React from 'react'
import summary from '../data/summary'
import education from '../data/education'
import courses from '../data/courses'
import Timeline from './Timeline'

function TimelineSection() {
  return (
    <>
      <Timeline title="Experiencia" data={summary} />
      <Timeline title="Educación" data={education} />
      <Timeline title="Cursos y Certificaciones" data={courses} />
    </>
  )
}

export default TimelineSection
