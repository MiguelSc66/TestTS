import { useReducer } from "react"
import { Sub } from "../types"



interface FromState {
    InputValues: Sub
}

type FormReducerAction = {
    type: 'change_value',
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: 'clear'
}

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: '',
}

const formReducer = (state: FromState['InputValues'], action: FormReducerAction) => {
    switch (action.type) {
        case 'change_value':
            const {inputName, inputValue} = action.payload
            console.log(action)
            return {
                ...state,
                [inputName]: inputValue
            }
        case 'clear':
            return INITIAL_STATE
        }
}

const useNewSubsForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubsForm