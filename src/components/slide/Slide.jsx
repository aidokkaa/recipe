import React from 'react'
import Flickity from 'react-flickity-component';
import './slide.css'
export const Slide = () => {
    const flickityOptions = {
        initialIndex: 2
      }
  return (
    <div>
      <div className="flick">
      <h1>Information for your health</h1>
      <Flickity
      className={'Slider'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
    <div className="img">
    <iframe width="300" height="300" src="https://www.youtube.com/embed/AjrvVQ7DHb4?si=GWnUtrc98zigb2Kw&amp;start=16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className="img">
    <iframe width="500" height="300" src="https://www.youtube.com/embed/hzwnwLgmFOQ?si=IqUP8KNp158AwZVc&amp;start=34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className="img">
    <iframe width="500" height="300" src="https://www.youtube.com/embed/c06dTj0v0sM?si=qCYhKcsDSOuleZ7Q&amp;start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>"
    </div>
    <div className="img">
    <iframe  width="500" height="300" src="https://www.youtube.com/embed/zdjWnvbaUZo?si=MVo0sqQQKc04GMAs&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </Flickity> 
      </div>
    </div>
  )
}
