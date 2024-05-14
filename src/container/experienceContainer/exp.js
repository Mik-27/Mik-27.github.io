import ExpCard from "../../components/exp-card/expCard";
import "./exp.css";
import expData from "../../assets/data/expData.json";

export default function Experience() {
    return (
        <div className="exp-main">
            <div className="exp-title">
                <h1>EXPERIENCE</h1>
            </div>
            <div className="exp-container">
                {expData.exp.map((d, i) => {
                    return (
                        <ExpCard
                            company={d.company}
                            duration={d.startDate + " - " + d.endDate}
                            jobTitle={d.jobTitle}
                            logo={require("../../assets/exp/" + d.logo)}
                            desc={d.desc}
                            website={d.website}
                        />
                    );
                })}
            </div>
        </div>
    );
}
