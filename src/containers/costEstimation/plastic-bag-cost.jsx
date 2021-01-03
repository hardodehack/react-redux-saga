import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import { NumericTextBox } from '@progress/kendo-react-inputs'



export const PlasticBagCost = (
    <div>
        <Field
            key={'length'}
            id={'length'}
            name={'length'}
            label={'Length'}
            component={NumericTextBox}
        />
        <br />
        <Field
            key={'width'}
            id={'width'}
            name={'width'}
            label={'Width'}
            component={NumericTextBox}
        />
        <br />
        <Field
            key={'gauge'}
            id={'gauge'}
            name={'gauge'}
            label={'Gauge'}
            layout={'horizontal'}
            component={NumericTextBox}
        />
    </div>
);
