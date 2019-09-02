import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const items = [
  {
    src: 'https://github.com/Chudimikelson/etoile_photos/blob/master/mrl.jpg?raw=true',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://github.com/Chudimikelson/etoile_photos/blob/master/face%20set.png?raw=true',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://github.com/Chudimikelson/etoile_photos/blob/master/body%20glow%20set.jpg?raw=true',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Banner = () => <UncontrolledCarousel items={items} />;

export default Banner;