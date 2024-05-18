import "./skillCard.css";

export default function SkillCard({ logo, skill }) {
    return (
        <div className="card">
            {logo ? (
                <div className="card-logo">
                    <img src={logo} alt={skill} />
                </div>
            ) : null}
            <div className="card-title">{skill}</div>
        </div>
    );
}
