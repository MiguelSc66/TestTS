import useNewSubsForm from "../hooks/useNewSubForm"
import { Sub } from "../types"



interface FormProps {
    onNewSubs: (newSub: Sub) => void
}



const Form = ({ onNewSubs }: FormProps) => {
    // const [inputValues, setInputValues] = useState<FromState['InputValues']>(INITIAL_STATE)
    
    const [inputValues, dispatch] = useNewSubsForm()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSubs(inputValues)
        hanldeClear()
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        dispatch({
            type: 'change_value',
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const hanldeClear = () => {
        // setInputValues(INITIAL_STATE)
        dispatch({type: 'clear'})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
                <input onChange={handleChange} value={inputValues.description} type="text" name="description" placeholder="description" />

                <button>Save name sub</button>
            </form>
        </div>
    )
}

export default Form
