import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/actions/index';


// const TAX_RATE = 0.07;
// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow('Paperclips (Box)', 100, 1.15),
//   createRow('Paper (Case)', 10, 45.99),
//   createRow('Waste Basket', 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

function Cart(props) {
  // const [total, setTotal] = useState(0);
  const classes = useStyles();
  console.log("hello from here", props.cart);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            {/* <TableCell align="right">Price</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Price</TableCell>
            {/* <TableCell align="right">Sum</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cart.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{1}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              {/* <TableCell align="right">{row.price * 1}</TableCell> */}
            </TableRow>
          ))}

          {/* <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>*/}
          {/* 
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{}</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer >
  );
}


const mapStateToProps = state => {
  return { cart: state.cart.cart };
};
const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);