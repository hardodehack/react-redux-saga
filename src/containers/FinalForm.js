import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { NumericTextBox } from '@progress/kendo-react-inputs'
import { DatePicker, TimePicker } from '@progress/kendo-react-dateinputs'
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

import { connect } from 'react-redux';

import { createStructuredSelector } from "reselect";

import actions from '../actions';

const formValidation = (values) => {
    const errors = {};

    if (!values.date) {
        errors.date = "Please select a date";
    }

    if (!values.time) {
        errors.time = "Please select a time";
    }

    if (!values.tissueType || values.tissueType === "Select the tissue type") {
        errors.tissueType = "Tissue Type is Required";
    }

    if (!values.machineSize || values.machineSize === "Select the machine size") {
        errors.machineSize = "Machine Size is Required";
    }

    if (!values.rollSize || values.rollSize === "Select the roll size") {
        errors.rollSize = "Roll Size is Required";
    }

    if (!values.gsm || values.gsm === "Select the Gsm") {
        errors.gsm = "GSM is Required";
    }

    if (!values.ppp || values.ppp === "Select pieces per packet") {
        errors.ppp = "Pieces per Packet is Required";
    }

    if (!values.millWeight) {
        errors.millWeight = "Mill Weight is Required";
    }

    if (!values.factoryWeight) {
        errors.factoryWeight = "Factory Weight is Required";
    }

    if (!values.machineReading) {
        errors.machineReading = "Machine Reading is Required";
    }

    if (!values.wastePacket) {
        errors.wastePacket = "Waste Packet is Required";
    }

    if (!values.wastePanni) {
        errors.wastePanni = "Waste Panni is Required";
    }

    if (!values.rollCoreWeight) {
        errors.rollCoreWeight = "Roll Core Weight is Required";
    }

    // let todaysDate = new Date();
    // todaysDate.setHours(0, 0, 0, 0);
    // let departureDatevalue = new Date(values.departureDate)
    // let arrivalDatevalue = new Date(values.arrivalDate);
    // departureDatevalue.setSeconds(departureDatevalue.getSeconds() + 1);
    // arrivalDatevalue.setSeconds(arrivalDatevalue.getSeconds() + 2);
    // if (departureDatevalue <= todaysDate) {
    //     errors.departureDate = "The departure date cannot be in the past";
    // } else if (departureDatevalue > arrivalDatevalue) {
    //     errors.arrivalDate = "The arrival cannot be before departure date";
    // }
    // if (!values.numberOfPassengers) {
    //     errors.numberOfPassengers = "Required";
    // } else if (values.numberOfPassengers > 40) {
    //     errors.numberOfPassengers = "The maximun passengers per registration is 40";
    // }

    return errors;
}

const initialValues = {

    date: new Date(),
    time: new Date(),
    tissueType: "Select the tissue type",
    machineSize: "Select the machine size",
    rollSize: "Select the roll size",
    gsm: "Select the Gsm",
    ppp: "Select pieces per packet",
};

const kendoHOC = (type, { input, meta, label, ...rest }) => {
    const Type = type;
    const LabelElement = type !== DropDownList ? 'label' : 'span';
    if (type === NumericTextBox && input.value === '') {
        input.value = null;
    }
    return <LabelElement className="k-form-field">
        <span>{label}</span>
        <Type
            {...input}
            {...rest}
        />
        {meta.error && meta.touched && <span className="k-required">{meta.error}</span>}
    </LabelElement>;
};

const KendoNumericTextBox = (options) => (kendoHOC(NumericTextBox, options))
const KendoDatePicker = (options) => (kendoHOC(DatePicker, options))
const KendoTimePicker = (options) => (kendoHOC(TimePicker, options))
const KendoDropDown = (options) => (kendoHOC(DropDownList, options))

class FinalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testTempVar: 0
        }
    }

    onSubmit = values => {
        window.alert("Roll Details Submitted Successfully")
        this.props.setFormData(values);        
    }


    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 container mt-3 border border-light active shadow">
                    <div className="header mt-3">
                        <h5>Roll Stock Management</h5>
                    </div>
                    <Form
                        validate={formValidation}
                        onSubmit={this.onSubmit}
                        initialValues={initialValues}
                        render={({ handleSubmit, reset, submitting, pristine, values, valid }) => (
                            <form onSubmit={handleSubmit} className="k-form">
                                <fieldset>
                                    <Field
                                        name="date"
                                        component={KendoDatePicker}
                                        label="Date" />

                                    <Field
                                        name="time"
                                        component={KendoTimePicker}
                                        label="Time" />

                                    <Field
                                        name="tissueType"
                                        component={KendoDropDown}
                                        data={["Hard", "Soft"]}
                                        label="Choose tissue type" />

                                    <Field
                                        name="machineSize"
                                        component={KendoDropDown}
                                        data={[22, 29]}
                                        label="Choose machine size" />

                                    <Field
                                        name="rollSize"
                                        component={KendoDropDown}
                                        data={[22,27,29,30,33,40]}
                                        label="Choose roll size" />
                                    <Field
                                        name="gsm"
                                        component={KendoDropDown}
                                        data={[14, 15, 16, 17,18]}
                                        label="Choose Gsm" />

                                    <Field
                                        name="ppp"
                                        component={KendoDropDown}
                                        data={[44,45,74,75,76,77,78,79,80,94,95,96,97,98,99,100]}
                                        label="Choose pieces per packet" />

                                    <Field
                                        name="millWeight"
                                        component={KendoNumericTextBox}
                                        min={1}
                                        label="Enter the Mill Weight" />

                                    <Field
                                        name="factoryWeight"
                                        component={KendoNumericTextBox}
                                        min={1}
                                        label="Enter the Factory Weight" />
                                    <Field
                                        name="machineReading"
                                        component={KendoNumericTextBox}
                                        min={1}
                                        label="Enter the Machine Reading" />
                                    <Field
                                        name="wastePacket"
                                        component={KendoNumericTextBox}
                                        min={1}
                                        label="Enter the Waste Packet" />
                                    <Field
                                        name="wastePanni"
                                        component={KendoNumericTextBox}
                                        min={1}
                                        label="Enter the Waste Panni" />

                                    <Field
                                        name="rollCoreWeight"
                                        component={KendoNumericTextBox}
                                        min={1}
                                        label="Enter the Roll Core Weight" />

                                    <div className="buttons float-right">
                                        <Button type="submit" primary={true} disabled={submitting || !valid}>
                                            Submit Roll Details
                                        </Button>
                                        &nbsp;
                                        <Button onClick={reset}>
                                            Reset
                                        </Button>


                                    </div>
                                </fieldset>
                            </form>

                        
                        )} />
                        <div className="footer mt-3">
                        <footer><center> <small> Copyright &copy; 2020, Hardik Patel, All rights reserved.</small> </center></footer>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () =>
    createStructuredSelector({
        //  formOneVar : selectors.makeSelectFromOneVar()
        //showretrytable: selectors.makeSelectorsShowRetrytable();
    });

function mapDispatchToProps(dispatch) {
    return {
        setFormData: (params) => {
            dispatch(actions.saveFormData(params))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FinalForm);