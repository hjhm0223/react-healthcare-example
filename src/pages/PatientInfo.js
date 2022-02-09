import react, { Component } from 'react';
import Search from '../components/Search';
import ResultTable from '../components/ResultTable';

class PatientInfo extends Component {
    state = {
        searchName: '진료예약일',
        startDate: new Date().toISOString().substr(0, 10),
        endDate: new Date().toISOString().substr(0, 10),
        patientName: '',
        resultKey: ['환자명', '성별', '생년월일', '휴대폰', '진료횟수', '최근진료(예약)일시'],
        patientInfoList: []
    };
    searchFunction = { 
        handleStartDate : (e) => {
            this.setState({
                startDate: e.target.value
            });
        },
        handleEndDate : (e) => {
            this.setState({
                endDate: e.target.value
            });
        },
        clickDateButton : (e) => {
            const today = new Date();
            const monthValue = e.target.value ? e.target.value : e.target.parentNode.value;

            if(monthValue === "") {
                this.setState({
                    startDate: null,
                    endDate: null
                });
            } else {
                this.setState({
                    startDate: new Date(today.setMonth(today.getMonth() - monthValue)).toISOString().substr(0, 10),
                    endDate: new Date().toISOString().substr(0, 10)
                });
            }
        },
        changeName : (e) => {
            this.setState({
                patientName: e.target.value
            });
        },
        clickSearchButton : (e) => {
            // DB 조회
            this.setState({
                patientInfoList: [{
                    patientName: '이름1',
                    patientSex: '남성',
                    patientBirth: '1994-01-02',
                    patientPhone: '01023481029',
                    diagnosisCount: 19,
                    diagnosisRecent: '2021-12-14 11:30'
                },{
                    patientName: '이름2',
                    patientSex: '여성',
                    patientBirth: '1997-04-17',
                    patientPhone: '01073457123',
                    diagnosisCount: 3,
                    diagnosisRecent: '2022-01-04 17:20'
                }]
            });
        }
    };

    render() {
        const searchData = this.state;
        const searchFunction = this.searchFunction;

        return (
            <div>
                <Search searchData={searchData} searchFunction={searchFunction} />
                <ResultTable resultKey={searchData.resultKey} resultList={searchData.patientInfoList} />
            </div>
        );
    }
}

export default PatientInfo;