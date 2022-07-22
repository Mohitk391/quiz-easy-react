import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { useQuiz } from "../../context/QuizContext";
import "./quiz.css";
import {quizData} from "../../data/quizData";
import { Link } from "react-router-dom";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const {quizState, quizDispatch} = useQuiz();
    const {category, score} = quizState;
    useEffect(() => {
        const currentOptions = [...quizData.categories[category.id].questionList[currentQuestion].incorrectOptions, quizData.categories[category.id].questionList[currentQuestion].answer];
        shuffleOptions(currentOptions);
        setOptions(currentOptions);
        setSelectedOption(null);
    }, [currentQuestion]);
    
    const shuffleOptions = (opts) => {
        opts.sort(() => Math.random() - 0.5);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        if(option === quizData.categories[category.id].questionList[currentQuestion].answer){
            quizDispatch({type:"INCREMENT_SCORE"});
        }
        const currentQuestionResult = {
            questionNumber: currentQuestion+1,
            question: quizData.categories[category.id].questionList[currentQuestion].question,
            options: options,
            selectedOption: option,
            answer: quizData.categories[category.id].questionList[currentQuestion].answer
        };
        quizDispatch({type:"RESULT_DATA", payload: currentQuestionResult});
    }

    return (
        <div class="page-layout">
        <NavBar />
        <main class="quiz-main flex">
            <div class="quiz-body flex flex-column flex-gap-2">
                <h2>First Quiz</h2>
                <div class="sub-details-section flex flex-space-between">
                    <h3>Question: {currentQuestion+1}/5</h3>
                    <p>Score: {score}</p>
                </div>
                <div class="question">
                    {quizData.categories[category.id].questionList[currentQuestion].question}
                </div>
                <div class="options flex flex-column flex-gap-1">
                    { options.map(option=> {
                        return (<button class="btn btn-hover option-button" onClick={()=>selectOption(option)} disabled={selectedOption}>{option}</button>)
                    })}
                </div>
                <div className="next flex flex-center">
                    {currentQuestion === 4 ? <Link to="/result"><button className="btn btn-hover option-button">Submit</button></Link>
                        : <button className="btn btn-hover option-button" onClick={()=>setCurrentQuestion(currentQuestion+1)}>Next</button>
                    }
                </div>
            </div>
        </main>
    </div>
    );
}

export { Quiz }