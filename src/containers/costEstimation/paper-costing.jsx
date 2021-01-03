import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import { NumericTextBox } from '@progress/kendo-react-inputs'



export const PaperCosting = (
    <div>
        <Field
            key={'rollSize'}
            id={'rollSize'}
            name={'rollSize'}
            label={'Roll Size'}
            component={NumericTextBox}
        />
        <br />
         <Field
            key={'machineSize'}
            id={'machineSize'}
            name={'machineSize'}
            label={'Machine Size'}
            component={NumericTextBox}
        />
        <br />
         <Field
            key={'gsm'}
            id={'gsm'}
            name={'gsm'}
            label={'GSM'}
            type={'gsm'}
            component={NumericTextBox}
        />
        <br />
        <Field
            key={'packetPieces'}
            id={'packetPieces'}
            name={'packetPieces'}
            label={'Packet Pieces'}
            component={NumericTextBox}
        />
         <br />
        <Field
            key={'ratePerKg'}
            id={'ratePerKg'}
            name={'ratePerKg'}
            label={'Rate Per Kg'}
            component={NumericTextBox}
        />
    </div>
);