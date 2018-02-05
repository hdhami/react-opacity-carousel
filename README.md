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
- Supports callback

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
            <OpacityCarousel>
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
| abc            | `boolean`     | `true` | abcd |
| xyz            | `boolean`     | `true` | pqrs |



=======================

### Contributing


=======================

### Raising issues


=======================




## License
