
export default function UserInput({ inputLabel, value, setValue }) {


    function handleChange(event) {
        setValue(event.target.value);
        console.log({ value })
    }

    return (
        <div>
            <label>{inputLabel}</label>
            <input type="number" value={value} onChange={handleChange} />
        </div>
    )
}