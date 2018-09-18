import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import moment from 'moment';
import numeral from 'numeraljs';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}><h2>{description}</h2></Link>
        <p>Amount: {numeral(amount).format('$0,0.00')} CreatedAt: {moment(createdAt).format('MMM DD YYYY')}</p> 
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(ExpenseListItem);
