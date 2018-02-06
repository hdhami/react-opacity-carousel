# React Opacity Carousel


Powerful, lightweight and fully customizable opacity carousel component for React apps.

### Features

- Fully customizable
- Template insertion
- Mobile friendly
- SSR support
- Custom animation duration
- Auto play feature
- Custom auto play interval
- Supports anything (image/videos/text content). Each direct child will be one slide

### Demo
<https://github.com/hdhami>


### Installing as a package
`npm install react-opacity-carousel --save-dev`

### Usage

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { OpacityCarousel } from 'react-opacity-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <OpacityCarousel duration={4000} interval={20} fade="in-out">
                <div>
                    <img src="content/a.jpeg" />
                    <p className="label">Title A</p>
                </div>
                <div>
                    <img src="content/b.jpeg" />
                    <p className="label">Title B</p>
                </div>
                <div>
                    <img src="content/c.jpeg" />
                    <p className="label">Title C</p>
                </div>
            </OpacityCarousel>
        );
    }
});

ReactDOM.render(<DemoCarousel />, document.querySelector('.opac-carousel'));

```

| Attributes            | Type          | Default | Description |
| :---------            | :--:          | :-----: | :----------- |
| duration            | `number`     | `4000` | animation duration for the list item in miliseconds |
| interval            | `number`     | `20` | interval duration for list item's opacity state update  |
| fade            | `string`     | `in-out` | type of fade effect on list item. Possible values are 'in', 'out','in-out' |



=======================

### Contributing


=======================

### Raising issues


=======================




## License

Please see [LICENSE] for details.




[LICENSE]: <https://github.com/hdhami/react-opacity-carousel/blob/master/LICENSE>
