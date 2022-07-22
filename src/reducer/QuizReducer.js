const QuizReducer = (quizState, action) => {
    switch(action.type){
        case "SET_CATEGORY":
            return {...quizState, category: action.payload}
        case "INCREMENT_SCORE":
            return {...quizState, score: quizState.score+1}
        case "RESULT_DATA":
            return {...quizState, questionData: [...quizState.questionData, action.payload]}
            case "CLEAR_DATA":
                return {...quizState, score: 0, questionData: []}
        default:
            return quizState;
    }
}

export { QuizReducer }