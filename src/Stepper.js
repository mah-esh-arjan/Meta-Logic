import React, { useState } from 'react';
import './Stepper.css'; // Add this for styles

const Stepper = () => {
    const [id, setId] = useState(1);

    const steps = [
        { stepId: 1, label: 'Personal Info' },
        { stepId: 2, label: 'Address' },
        { stepId: 3, label: 'Payment' },
        { stepId: 4, label: 'Confirmation' },
    ];

    const StepContent = ({ id }) => {
        switch(id) {
            case 1:
                return <div><h2>Personal Info</h2></div>;
            case 2:
                return <div><h2>Address</h2></div>;
            case 3:
                return <div><h2>Payment</h2></div>;
            case 4:
                return <div><h2>Confirmation</h2></div>;
            default:
                return null;
        }
    };

    return (
        <div className="stepper-container">
            <div className="steps">
                {steps.map((step, index) => (
                    <div
                        key={step.stepId}
                        className={`step ${id === step.stepId ? 'active' : ''}`}
                        onClick={() => setId(step.stepId)}
                    >
                        <span className="step-number">{step.stepId}</span>
                    </div>
                ))}
            </div>
            <div className="step-content">
                <StepContent id={id} />
            </div>
        </div>
    );
};

export default Stepper;
