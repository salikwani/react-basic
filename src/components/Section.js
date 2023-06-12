const Section = ({heading, description}) => {
    return (
        <div className="section">
            <h2>{heading}</h2>
            <p>{description}</p>
            <hr></hr>
        </div>
    )
}

export default Section;