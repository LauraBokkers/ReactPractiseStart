import UserInput from "./UserInput"


export default function InvestmentInput() {

    return (
        <div id="user-input">
            <div class="input-group">
                <UserInput inputLabel="Initial Investment" />
                <UserInput inputLabel="Annual Investment" />
            </div>
            <div class="input-group">
                <UserInput inputLabel="Expected Return" />
                <UserInput inputLabel="Duration" />
            </div>
        </div>
    )
}