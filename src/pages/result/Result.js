import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { useQuiz } from "../../context/QuizContext";
import "./result.css";

const Result = () => {
    const {quizState} = useQuiz();
    const {category, score, questionData} = quizState;
    

    const selectClass = (response, option) => {
        if( option === response.selectedOption){
            if(option === response.answer){
                return "correct-answer";
            }
            else{
                return "incorrect-answer";
            }
        }
        else if(option === response.answer){
            return "correct-answer";
        }
        else{
            return "response-option";
        }
    }

    return (
        <div className="page-layout">
            <NavBar />
            <main className="result-main flex">
                <div className="result-body flex flex-column flex-center flex-gap-2">
                    <h2 className="result-title">{category.categoryName}</h2>
                    <div className="sub-details-section flex flex-center flex-column flex-gap-1">
                        <p>Score: {score}/5</p>
                        <Link to="/"><button className="btn btn-hover">Play Again</button></Link>
                    </div>
                    {questionData.map(response=>{
                        return (
                            <div className="question-list flex flex-column flex-gap-1">
                                <div className="question">
                                    <h3>{response.question}</h3>
                                </div>
                                <div className="options flex flex-column flex-gap-1">
                                    {response.options.map(option=>{
                                        return (<button className={`btn ${selectClass(response,option)}`} >{option}</button>)
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

export { Result }