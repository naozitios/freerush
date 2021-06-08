import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    reviewer: <h6> - Daniel A </h6>,
    caption: <h5> "Edward showed me not just magic, but also a good time" </h5>
  },
  {
    id: 2,
    reviewer: <h6> - Leong K </h6>,
    caption: <h5> "Edward's tricks arent just limited to magic. His dick does it too" </h5>
  },
  {
    id: 3,
    reviewer: <h6> - YouLian M </h6>,
    caption: <h5> "I was taken aback. But it was not like i had a choice. It was just given from the back" </h5>
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="text-muted" captionText={item.reviewer} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 200px;
              background: E2D686;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
      </Carousel>
    </div>
  );
}
/*
code for arrows on carousel, to be placed after the slides portion
<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} color="black"/>
<CarouselControl direction="next" directionText="Next" onClickHandler={next} color="black"/>
*/
export default Example;
