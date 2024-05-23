
export default function UserInput({ inputLabel, value, setValue, durationError }) {


    function handleChange(event) {
        setValue(Number(event.target.value));
    }

    return (
        <div>
            <label>{inputLabel}</label>
            <input type="number" value={value} onChange={handleChange} />
            {durationError && <span className="error">{durationError}</span>}
        </div>
    )
}