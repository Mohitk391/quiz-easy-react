import { NavBar } from "../../components/NavBar/NavBar";
import "./styles.css";
import { Link } from "react-router-dom";
import {categories } from "../../data/data";
import { useQuiz } from "../../context/QuizContext";
import { useEffect } from "react";
const Homepage = () => {
    const {quizDispatch} = useQuiz();
    useEffect(()=>{
        quizDispatch({type:"CLEAR_DATA"});
    },[]);
    return (
        <div className="page-layout">
        <NavBar />
        <main className="home-main flex flex-center flex-gap-2">
            {
                categories.map(category=>{
                    return(
                        <div className="card vertical-card flex flex-column">
                            <Link to="/rules">
                                <div className="card-image" onClick={()=>{
                                    quizDispatch({type: "SET_CATEGORY", payload: category})
                                }}>
                                    <img src={category.image} alt={category.categoryName}/>
                                </div>
                            </Link>
                            <div className="card-content">
                                <div className="card-header flex flex-column flex-center">
                                    <p className="card-title quiz-title">{category.categoryName}</p>
                                    <div className="quiz-description">{category.description}</div>
                                </div>
                                
                            </div>
                        </div>
                    )
                })
            }
        </main>
    </div>
    );
}

export { Homepage }