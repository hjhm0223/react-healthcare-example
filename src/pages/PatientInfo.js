import react, { Component } from 'react';
import Search from '../components/Search';
import Table from '../components/Table';

class PatientInfo extends Component {
    state = {
        startDate: new Date().toISOString().substr(0, 10),
        endDate: new Date().toISOString().substr(0, 10),
        patientName: '',
        total: '',
        patientList: []
    };

    render() {
        const { total, patientList } = this.state;
        
        const handleStartDate = (e) => {
            this.setState({
                startDate: e.target.value
            });
        }
        const handleEndDate = (e) => {
            this.setState({
                endDate: e.target.value
            });
        }
        const clickDateButton = (e) => {
            this.setState({
                startDate: new Date().toISOString().substr(0, 10),
                endDate: new Date().toISOString().substr(0, 10)
            });
        }
        const changeName = (e) => {
            this.setState({
                patientName: e.target.value
            });
        }
        const clickSearchButton = (e) => {
            console.log(this.state);
        }
        return (
            <div>
                <Search name="진료예약일" handleStartDate={handleStartDate} handleEndDate={handleEndDate} clickDateButton={clickDateButton} changeName={changeName} clickSearchButton={clickSearchButton} />
                {/* <Table total={total} patientList={patientList} /> */}
            </div>
        );
    }
}

export default PatientInfo;