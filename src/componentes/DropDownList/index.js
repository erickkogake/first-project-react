import './DropDownDist.css'

const DropDownList = (props) => {

    return (
        <div  className='list-team'>
            <label>{props.label}</label>
            <select>
                {/* {props.itens.map(item => { return <option key={item}>{item}</option>} )} - poderia fazer assim */ } 
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDownList;