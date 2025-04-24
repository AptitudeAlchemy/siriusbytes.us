import React from 'react'
import ProjectBanner from '../components/ProjectBanner'
import ProjectSearchResult from '../components/ProjectSearchResult'

import '../css/projects.css';

function Projects() {

  const styles = {
    projectBackground: {
      backgroundImage: 'url(https://ukinvestormagazine.co.uk/wp-content/uploads/2022/09/HANetf-digital-economy-1-1.jpeg)',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      },
  }

  return (
    <section className='container-fluid bg-transparent py-4'>
       <div className="container-fluid py-4" style={screen.width < 1080 ? {} : styles.projectBackground }>
        <ProjectBanner></ProjectBanner>
       </div>
        <ProjectSearchResult></ProjectSearchResult>
    </section>
  )
}

export default Projects