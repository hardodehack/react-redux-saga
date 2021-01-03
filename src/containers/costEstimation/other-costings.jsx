import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import { NumericTextBox } from '@progress/kendo-react-inputs'



export const OtherCostings = (
    <div>
        <Field
            key={'transpotation'}
            id={'transpotation'}
            name={'transpotation'}
            label={'Transpotation Cost'}
            component={NumericTextBox}
        />
        <br />
        <Field
            key={'box'}
            id={'box'}
            name={'box'}
            label={'Corrugated Box Cost'}
            component={NumericTextBox}
        />
        <br />
        <Field
            key={'labour'}
            id={'labour'}
            name={'labour'}
            label={'Labour Cost'}
            layout={'horizontal'}
            component={NumericTextBox}
        />
    </div>
);
