## Installation


```bash
npm i easysliderreact
```

## Basic Usage

Import the component to your project, and pass all your slides data as prop. All elements editable. 

Your parent components looks like this;

```python
import React from 'react';
import EasySlider from './easySlider/EasySlider';
const sliderItems = [
        {
            id: 1,
            img: "slideImageLink",
            title: "slide Title",
            desc: "slide description",
            bg: "slide background color HEX without #", 
            btnName: 'slide button tittle',
            slideLink: 'slideLink'

        }
    ];
    
function App() {
    return (<EasySlider sliderItems={sliderItems}/></div>)

export default App;
```