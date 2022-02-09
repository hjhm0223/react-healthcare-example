import React from 'react';
import '../../asserts/styles/Body.css';
import Home from '../../pages/Home';
import Schedule from '../../pages/Schedule';
import Reservation from '../../pages/Reservation';
import PatientInfo from '../../pages/PatientInfo';
import History from '../../pages/History';

const menuList = {
    home: <Home />,
    schedule: <Schedule/>,
    reservation: <Reservation/>,
    patientInfo: <PatientInfo />,
    history: <History/>
};

const Body = (props) => {
    const { menu, name } = props.targetPage;
    return (
        <div className="Body">
            <span className="PageName">{name}</span>
            <hr/>
            { menuList[menu] }
        </div>
    );
}

export default Body;
