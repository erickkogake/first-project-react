import TextField from "../TextField"
import './Form.css'
import DropDownList from "../DropDownList"
import Button from "../Button"

const Form = () => {
    
    const team = [
        'Programação',
        'Front-End',
        'Data Science',
        'Mobile'
    ]

    return (
    <section  className="form">
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <TextField label='Nome' placeholder='Digite o seu nome' />
            <TextField label='Cargo' placeholder='Digite o seu cargo' />
            <TextField label='Imagem' placeholder='Insira a URL de imagem' />
            <DropDownList label='Time' itens={team}></DropDownList>
            <Button label='Criar Card'></Button>
        </form>
    </section>
    )
}

export default Form;