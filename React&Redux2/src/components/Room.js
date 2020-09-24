import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';
// import FilledInput from '@material-ui/core/FilledInput';
import Checkbox from '@material-ui/core/Checkbox';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { connect } from 'react-redux';
import * as actions from '../action';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '60px',
        height: '45px',
        marginTop: '-8px',
        marginLeft: '-8px'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: '60px',
    },
    select: {
    }
})

class Room extends Component {
    constructor(props) {
        super(props);
        this.onChangeAdult = this.onChangeAdult.bind(this);
        this.onChangeChildren = this.onChangeChildren.bind(this);
        this.onSelectCheck = this.onSelectCheck.bind(this);
    }

    onChangeAdult(value) {
        this.props._change_adult(this.props.rid, value);
    }

    onChangeChildren(value) {
        this.props._change_children(this.props.rid, value);
    }

    onSelectCheck(event) {
        // console.log("check event ", event.target, event.target.checked);
        this.props._select_check(this.props.rid, event.target.checked);
    }

    render() {
        const { classes, title, hascheckbox, checked, adult, children } = this.props;
        console.log("room id ", this.props.rid);
        console.log("render ", adult, children, checked);
        return (
            <div className="room">
                <div className={(checked ? "title checked" : "title")}>
                    {hascheckbox && 
                    <Checkbox
                        className="check"
                        style={{marginTop: '-5px'}}
                        checked={checked}
                        onChange={ (event) => this.onSelectCheck(event) }
                        value='checked'
                        color="default"
                    />}
                    <span className="text">{title}</span>
                </div>
                        
                <div className={(checked ? "box checked" : "box")}>
                    <div className="adults">
                        <label className="label">Adults<br/>(18+)</label>
                        <form className={classes.root} autoComplete="off">
                            <FormControl variant="outlined" className={classes.formControl}>
                                <Select
                                    className={classes.select}
                                    native
                                    disabled={!checked}
                                    value={adult}
                                    onChange={ (event) => this.onChangeAdult(event.target.value) }
                                    input={<OutlinedInput name="number" labelWidth={0} id="filled-number-simple" />}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                </Select>
                            </FormControl>
                        </form>
                    </div>
                    <div className="children">
                        <label className="label">Children<br/>(0-17)</label>
                        <form className={classes.root} autoComplete="off">
                            <FormControl variant="outlined" className={classes.formControl}>
                                <Select
                                    native
                                    className={classes.select}
                                    disabled={!checked}
                                    value={children}
                                    onChange={ (event) => this.onChangeChildren(event.target.value) }
                                    input={<OutlinedInput name="number" labelWidth={0} id="filled-number-simple" />}
                                >
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                </Select>
                            </FormControl>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        _change_adult: (room, value) => {
            dispatch(actions.changeAdult(room, value))
        },
        _change_children: (room, value) => {
            dispatch(actions.changeChildren(room, value))
        },
        _select_check: (room, value) => {
            dispatch(actions.selectCheck(room, value))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Room));