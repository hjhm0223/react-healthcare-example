import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        fontSize: '12px'
    },
    totalCount: {
        margin: '3px',
        fontSize: '15px'
    }
});

const ResultTable = (props) => {
    const classes = useStyles();
    const { resultKey, resultList } = props;
    const totalCount = resultList.length;

    return (
        <div>
            <span className={classes.totalCount}>총 {totalCount}건</span>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {resultKey.map((key) => (
                                <TableCell>{key}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {resultList.map((result) => (
                            <TableRow key={Object.values(result)[0]}>
                                {Object.values(result).map((value) => (
                                    <TableCell>{value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ResultTable;