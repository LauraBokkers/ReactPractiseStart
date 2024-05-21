import UserInput from "./UserInput"
import { useState } from "react";


export default function InvestmentInput() {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [annualInvestment, setAnnualInvestment] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    return (
        <div id="user-input">
            <div className="input-group">
                <UserInput inputLabel="Initial Investment" value={initialInvestment} setValue={setInitialInvestment} />
                <UserInput inputLabel="Annual Investment" value={annualInvestment} setValue={setAnnualInvestment} />
            </div>
            <div className="input-group">
                <UserInput inputLabel="Expected Return" value={expectedReturn} setValue={setExpectedReturn} />
                <UserInput inputLabel="Duration" value={duration} setValue={setDuration} />
            </div>
        </div>
    )
}