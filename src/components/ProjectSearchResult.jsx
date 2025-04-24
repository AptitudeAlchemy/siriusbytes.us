import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectSearchResult() {

  const cards = [
    {_id:0, title:'E-Commerce website', url:'https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-2.jpg', price:4999, discount:0.45, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae officia alias suscipit aliquid commodi, labore fugit non deleniti fuga."},
    {_id:1, title:'E-Commerce website', url:'https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-2.jpg', price:3999, discount:0.35, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae officia alias suscipit aliquid commodi, labore fugit non deleniti fuga."},
  ];

  return (
    <section className="container text-dark py-5 bg-transparent mt-4 ProjectSearchResult">
      <h2 className="h2 fw-bold">Search Result</h2>
      <hr />
      <div className="cards Cards m-2 d-flex justify-content-start align-items-center flex-wrap">
      {cards.length > 1 ? cards.map(card => (
        <ProjectCard card={card}></ProjectCard>
      )) : <>No Records found</>}
      </div>

    </section>
  )
}

export default ProjectSearchResult