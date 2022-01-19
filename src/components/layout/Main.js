import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Main extends Component {
  state = {  
    menuItem: [
      {"page": "schedule", "name": "진료일정"},
      {"page": "reservation", "name": "진료예약"},
      {"page": "patientInfo", "name": "환자정보"},
      {"page": "history", "name": "진료이력"}
    ],
    targetPage: {
      menu: "home",
      name: "Home Page"
    }
  };
  
  render() {
    const { menuItem, targetPage } = this.state;
    const menuClick = (e) => {
      this.setState({ 
        targetPage: {
          menu: e.target.id,
          name: e.target.innerHTML
        }
      });
    }

    return (
        <div>
            <Header menuItem={ menuItem } menuClick={ menuClick } />
            <Body targetPage={ targetPage }/>
        </div>
    );
  }
}

export default Main;
