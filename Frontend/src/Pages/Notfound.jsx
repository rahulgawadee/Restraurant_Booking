import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>Looks Like You are lost</h1>
          <p>we cants seem to find you the page your'e loking for</p>
          <Link to= {"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight/>
            </span>
          </Link>
        </div>

    </section>
    </>
  )
}

export default Notfound
