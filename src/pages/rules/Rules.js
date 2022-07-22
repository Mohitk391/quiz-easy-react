import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import "./rules.css";

const Rules = () => {
    return (
        <div class="page-layout">
            <NavBar />
            <main class="rules-main flex flex-center">
                <div class="rules-body flex flex-column flex-gap-1 flex-space-between">
                    <h3>Rules</h3>
                    <ul class="rules-list flex flex-column flex-gap-1">
                        <li>This quiz is of 5 questions.</li>
                        <li>You will get 10 seconds for each question.</li>
                        <li>You should not cheat during the quiz attempt.</li>
                        <li>There is no negative markings for wrong answers.</li>
                        <li>If you don't know the correct option, try out your luck!!!</li>
                    </ul>
                    <Link to="/quiz-page"><button class="btn btn-hover start-quiz-button">Start Quiz</button></Link>
                </div>
            </main>
        </div>
    );
}

export { Rules }