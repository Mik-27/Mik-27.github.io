import "./expCard.css";

export default function ExpCard({
    company,
    jobTitle,
    duration,
    desc,
    logo,
    website,
}) {
    // 08413d
    var desc_array = desc.split(".");
    desc_array.pop();
    return (
        <div className="exp-card">
            <div className="exp-image">
                <img src={logo} alt={company} />
            </div>
            <div className="card-contents">
                <h2>{company}</h2>
                <h3>{jobTitle}</h3>
                <p>{duration}</p>
                <ul>
                    {desc_array.map((d) => {
                        return <li>{d + "."}</li>;
                    })}
                </ul>
                {website && (
                    <div className="website-container">
                        <span>→</span>
                        <a
                            href={website}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            View Website
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
