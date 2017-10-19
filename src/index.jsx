import React from 'react';
import {render} from 'react-dom';

import css from './index.scss';

import Header from './components/header.jsx';
import CitySelect from './components/city-select.jsx';
import PlaceItem from './components/place-item.jsx';
import PlaceAddItem from './components/place-add-item.jsx';

const ADD_BTN_DUMMY = Symbol();
const responseToJson = (response) => {
  if (response.status === 200) {
    return response.json();
  }
};

class App extends React.Component {
  state = {
    places: [],
    cities: []
  }

  componentWillMount = () => {
    fetch('/places.json')
      .then(responseToJson)
      .then((data) => {
        this.setState({'places': data});
      });
    fetch('/cities.json')
      .then(responseToJson)
      .then((data) => {
        this.setState({'cities': data});
      });
  }

  render () {
    const places = (this.state.places || []).slice();

    if (places.length < 4) {
      places.push(ADD_BTN_DUMMY);
    } else {
      places.splice(3, 0, ADD_BTN_DUMMY);
    }

    return ([
      <Header key="1"/>,
      <main key="2">
        <div className="container">
          <h1 className="h1">Путеводитель</h1>
          <CitySelect cities={this.state.cities}/>
        </div>
        <div className="catalog-bg">
          <div className="container">
            <div className="row">
              {
                places.map((item, key) => (
                  <div className="item" key={item.id || '.' + key}>
                    {
                      item === ADD_BTN_DUMMY ?
                        <PlaceAddItem/> :
                        <PlaceItem {...item}/>
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </main>
    ]);
  }
}

render(<App/>, document.getElementById('content'));
