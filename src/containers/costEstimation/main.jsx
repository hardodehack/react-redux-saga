import * as React from 'react';

import { Form, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Stepper } from '@progress/kendo-react-layout';

import { PaperCosting } from './paper-costing.jsx';
import { PlasticBagCost } from './plastic-bag-cost.jsx';
import { DCutBagCost } from './d-cut-bag-cost.jsx';
import { OtherCostings } from './other-costings.jsx';

const stepPages = [
    PaperCosting,
    PlasticBagCost,
    DCutBagCost,
    OtherCostings
];

export const main = () => {
    const [step, setStep] = React.useState(0);
    const [formState, setFormState] = React.useState({});
    const [steps, setSteps] = React.useState([
        { label: 'Paper Costing', isValid: undefined },
        { label: 'Plastic Bag Costing', isValid: undefined },
        { label: 'D-Cut Bag Costing', isValid: undefined },
        { label: 'Other Costings', isValid: undefined },
    ]);

    const lastStepIndex = steps.length - 1;
    const isLastStep = lastStepIndex === step;

    const onStepSubmit = React.useCallback(
        (event) => {
            const { isValid, values } = event;

            const currentSteps = steps.map((currentStep, index) => ({
                ...currentStep,
                isValid: index === step ? isValid : currentStep.isValid
            }));

            setSteps(currentSteps);

            if (!isValid) {
                return;
            }

            setStep(() => Math.min(step + 1, lastStepIndex));
            setFormState(values);

            if (isLastStep) {

                let pC = ((values.rollSize * values.machineSize * values.gsm * values.packetPieces ) / 10000000) * values.ratePerKg;
                let paperCosting = Math.round((pC + Number.EPSILON) * 100) / 100;

                let transpotationCost = values.transpotation;
                let coroBoxCost = values.box;
                let labourCost = values.labour;

                
                
                let pBInter = (values.length * values.width * values.gauge) / 3265;
                let dCutInter = (values.dlength * values.dwidth * values.dgauge) / 3265;

                console.log('Hardik pBInter ',pBInter);
                
                let pBRound = Math.round((pBInter + Number.EPSILON) * 100) / 100;   
                let dCutRound = Math.round((dCutInter + Number.EPSILON) * 100) / 100;  

                console.log('Hardik pBRound ',pBRound);

                let plasticBagCostingInter = ( pBRound / 1000 ) * values.pRatePerKg;
                let dCutBagCostingInter = ( dCutRound /  1000 ) * values.dRatePerKg;

                console.log('Hardik plasticBagCostingInter ',plasticBagCostingInter);
                
                let plasticBagCosting = Math.round((plasticBagCostingInter + Number.EPSILON) * 100) / 100;
                let dCutBagCosting = Math.round((dCutBagCostingInter + Number.EPSILON) * 100) / 100;  

                let totalCostingInter = paperCosting + transpotationCost + coroBoxCost + labourCost + plasticBagCosting + dCutBagCosting;
                let totalCosting = Math.round((totalCostingInter + Number.EPSILON) * 100) / 100;

                console.log('Hardik paperCosting ',paperCosting);
                console.log('Hardik transpotationCost',transpotationCost);
                console.log('Hardik coroBoxCost',coroBoxCost);
                console.log('Hardik labourCost',labourCost);
                console.log('Hardik plasticBagCosting',plasticBagCosting);
                console.log('Hardik dCutBagCosting',dCutBagCosting);

                console.log('Hardik ',totalCosting);

                alert('Paper Costing '+ paperCosting +'\nPlastic Bag Costing '+ plasticBagCosting+'\nD-Cut Bag Costing '+dCutBagCosting+'\nTranspotation Cost '+transpotationCost+'\nCorogated Box Cost '+coroBoxCost+'\nLabour Cost '+labourCost+'\n\nTotal Costing '+totalCosting);
            }
        },
        [step, steps, setSteps, setStep, setFormState, isLastStep]
    );

    const onPrevClick = React.useCallback(
        (event) => {
            event.preventDefault();
            setStep(() => Math.max(step - 1, 0));
        },
        [step, setStep]
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Stepper value={step} items={steps} />
            <Form
                initialValues={formState}
                onSubmitClick={onStepSubmit}
                render={(formRenderProps) => (
                    <div style={{ alignSelf: 'center' }}>
                        <FormElement style={{ width: 480 }}>
                            {stepPages[step]}
                            <span style={{ marginTop: '40px' }} className={'k-form-separator'} />
                            <div
                                style={{ justifyContent: 'space-between', alignContent: 'center' }}
                                className={'k-form-buttons k-buttons-end'}
                            >
                                <span style={{ alignSelf: 'center' }}>Step {step + 1} of 3</span>
                                <div>
                                    {
                                        step !== 0 ? (
                                            <Button style={{ marginRight: '16px' }} onClick={onPrevClick}>
                                                Previous
                                            </Button>
                                        ) : undefined
                                    }
                                    <Button
                                        primary={true}
                                        disabled={!formRenderProps.allowSubmit}
                                        onClick={formRenderProps.onSubmit}
                                    >
                                        {isLastStep ? 'Submit' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </FormElement>
                    </div>
                )}
            />
        </div>
    );
};

export default main;
