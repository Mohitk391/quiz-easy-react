import { createContext, useContext, useReducer } from "react";
import { QuizReducer } from "../reducer/QuizReducer";

const QuizContext = createContext();

const initialState = {
    category: null,
    score: 0,
    questionData: []
}

const QuizProvider = ({children}) => {
    const [quizState, quizDispatch] = useReducer(QuizReducer, initialState);

    return (<QuizContext.Provider value={{quizState, quizDispatch}}>
        {children}
    </QuizContext.Provider>
    );
}

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz }