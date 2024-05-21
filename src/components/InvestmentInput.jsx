import UserInput from "./UserInput"
import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";





export default function InvestmentInput() {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [annualInvestment, setAnnualInvestment] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');




    const annualData = calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
    });

    // in annual data zit een array met objecten
    // deze functie moet uitgevoerd worden wanneer alle 4 velden ingevuld zijn en steeds opnieuw bij een verandering (van een geheel veld)



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