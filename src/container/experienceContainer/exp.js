import ExpCard from "../../components/exp-card/expCard";
import "./exp.css";

export default function Experience() {
    return (
        <div className="exp-main">
            <div className="exp-title">
                <h1>EXPERIENCE</h1>
            </div>
            <div className="exp-container">
                <ExpCard />
            </div>
        </div>
    );
}
