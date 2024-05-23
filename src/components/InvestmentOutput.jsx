
import { formatter } from "../util/investment"


export default function InvestmentOutput({ annualDataArray }) {

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {annualDataArray.map((year) => {
                    return (
                        <tr key={year.year}>
                            <td>{year.year}</td>
                            <td>{formatter.format(year.valueEndOfYear)}</td>
                            <td>{formatter.format(year.interest)}</td>
                            <td>{formatter.format(year.totalInterest)}</td>
                            <td>{formatter.format(year.annualInvestment)}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}