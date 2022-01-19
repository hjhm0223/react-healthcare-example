import '../asserts/styles/Search.css';

const Search = (props) => {
    const { name, handleStartDate, handleEndDate, clickDateButton, changeName, clickSearchButton } = props;

    return (
        <div className="Search">
            <div className="SearchBox">
                <dl>
                    <dt><span className="SearchName">{name}</span></dt>
                    <dd className="SearchInput">
                        <input type="date" id="startDate" placeholder="날짜 입력" onChange={handleStartDate}/>
                        <span>-</span>
                        <input type="date" id="endDate" placeholder="날짜 입력" onChange={handleEndDate}/>
                    </dd>
                    <dd className="DateButton">
                        <button value="1" onClick={clickDateButton}>1개월</button>
                        <button value="3" onClick={clickDateButton}>3개월</button>
                        <button value="12" onClick={clickDateButton}>1년</button>
                        <button value="0" onClick={clickDateButton}>전체</button>
                    </dd>
                </dl>
            </div>
            <div className="SearchBox">
                <dl>
                    <dt><span className="SearchName">환자명</span></dt>
                    <dd className="SearchInput"><input type="text" id="patientName" onChange={changeName}/></dd>
                </dl>
            </div>
            <div className="SearchButton">
                <button onClick={clickSearchButton}>검색</button>
            </div>
        </div>
    );
}

export default Search;