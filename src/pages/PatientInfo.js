import Header from '../components/Header';
import './PatientInfo.css'

const PatientInfo = () => {
    return (
        <div>
            <Header />
            <div className="Patient-info">
                <h2>환자정보</h2>
                <hr/>
                <dl className="Search">
                    <dt><span>진료예약일</span>
                        <dd><span>날짜입력</span></dd>
                        <dd><span>날짜입력</span></dd>
                        <dd><span>날짜선택</span></dd>
                    </dt>
                </dl>
            </div>
        </div>
    );
}

export default PatientInfo;