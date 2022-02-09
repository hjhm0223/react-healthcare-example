import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Button, TextField } from '@material-ui/core';

const searchStyle = {
    searchBoxDivStyle: {
        minHeight: '40px',
        boxSizing: 'content-box',
        borderBottom: '1px solid #e5e5e5'
    },
    searchDlStyle: {
        display: 'flex',
        alignItems: 'center'
    },
    searchDtStyle: {
        width: '150px'
    },
    searchNameStyle: {
        fontSize: '17px',
        margin: '0 30px',
        fontWeight: 'bold'
    },
    searchDateStyle: {
        fontSize: '15px',
        margin: '0 10px',
        width: '200px',
        display: 'inline-table',
        verticalAlign: 'initial'
    },
    searchInputStyle: {
        fontSize: '15px',
        margin: '0 10px',
        display: 'inline-table',
        justifyContent: ''
    },
    searchDateButtonStyle: {
        fontSize: '15px',
        height: '38px',
        border: '1px solid rgb(182, 181, 181)',
        borderRadius: '2px',
        margin: '0 5px',
        minWidth: '70px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        color: 'black'
    },
    searchButtonDivStyle: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        margin: '30px 0'
    },
    searchButtonStyle: {
        fontSize: '18px',
        width: '100px',
        height: '45px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};


const Search = (props) => {
    const { searchName, startDate, endDate } = props.searchData;
    const { handleStartDate, handleEndDate, clickDateButton, changeName, clickSearchButton } = props.searchFunction;
    const { searchBoxDivStyle, searchDlStyle, searchDtStyle, searchNameStyle, searchDateButtonStyle, searchDateStyle, searchInputStyle, searchButtonDivStyle, searchButtonStyle } = searchStyle;
    
    return (
        <div>
            <div style={searchBoxDivStyle}>
                <dl style={searchDlStyle}>
                    <dt style={searchDtStyle}><span style={searchNameStyle}>{searchName}</span></dt>
                    <dd>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker style={searchDateStyle}
                                                format="yyyy-MM-dd"
                                                inputVariant="outlined"
                                                value={startDate}
                                                onChange={handleStartDate} />
                            <span>-</span>
                            <KeyboardDatePicker style={searchDateStyle}
                                                format="yyyy-MM-dd"
                                                inputVariant="outlined"
                                                value={endDate}
                                                onChange={handleEndDate} />
                        </MuiPickersUtilsProvider>
                    </dd>
                    <dd>
                        <Button style={searchDateButtonStyle} color="primary" value="1" onClick={clickDateButton}>1개월</Button>
                        <Button style={searchDateButtonStyle} color="primary" value="3" onClick={clickDateButton}>3개월</Button>
                        <Button style={searchDateButtonStyle} color="primary" value="12" onClick={clickDateButton}>1년</Button>
                        <Button style={searchDateButtonStyle} color="primary" value="" onClick={clickDateButton}>전체</Button>
                    </dd>
                </dl>
            </div>
            <div style={searchBoxDivStyle}>
                <dl style={searchDlStyle}>
                    <dt style={searchDtStyle}><span style={searchNameStyle}>환자명</span></dt>
                    <dd>
                        <TextField id="outlined-basic" variant="outlined" style={searchInputStyle} onChange={changeName}/>
                    </dd>
                </dl>
            </div>
            <div style={searchButtonDivStyle}>
                <Button style={searchButtonStyle} color="primary" onClick={clickSearchButton}>검색</Button>
            </div>
        </div>
    );
}

export default Search;