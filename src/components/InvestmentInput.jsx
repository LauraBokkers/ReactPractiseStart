import UserInput from "./UserInput"



export default function InvestmentInput({ initialInvestment, setInitialInvestment, annualInvestment, setAnnualInvestment, expectedReturn, setExpectedReturn, duration, setDuration, durationError }) {

    return (
        <div id="user-input">
            <div className="input-group">
                <UserInput inputLabel="Initial Investment" value={initialInvestment} setValue={setInitialInvestment} />
                <UserInput inputLabel="Annual Investment" value={annualInvestment} setValue={setAnnualInvestment} />
            </div>
            <div className="input-group">
                <UserInput inputLabel="Expected Return" value={expectedReturn} setValue={setExpectedReturn} />
                <UserInput inputLabel="Duration" value={duration} setValue={setDuration} durationError={durationError} />
            </div>
        </div>
    )
}