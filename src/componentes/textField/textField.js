import './textField.css'

export const TextField = (props) => {
    console.log(props)
    return (
        <div className="text-field">
            <label>Nome</label>
            <input placeholder="Digite o seu nome"/>
        </div>
    )
}

