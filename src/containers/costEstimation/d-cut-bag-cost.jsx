import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import { NumericTextBox } from '@progress/kendo-react-inputs'



export const DCutBagCost = (
    <div>
        <Field
            key={'dlength'}
            id={'dlength'}
            name={'dlength'}
            label={'Length'}
            component={NumericTextBox}
        />
        <br />
        <Field
            key={'dwidth'}
            id={'dwidth'}
            name={'dwidth'}
            label={'Width'}
            component={NumericTextBox}
        />
        <br />
        <Field
            key={'dgauge'}
            id={'dgauge'}
            name={'dgauge'}
            label={'Gauge'}
            component={NumericTextBox}
        />
        <br />

        <Field
            key={'dRatePerKg'}
            id={'dRatePerKg'}
            name={'dRatePerKg'}
            label={'Rate Per Kg'}
            component={NumericTextBox}
        />
    </div>
);
