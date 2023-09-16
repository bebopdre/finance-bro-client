import './Options.scss';

function Options({options}) {
    console.log(options);
    return (
        <div className="options">
            {
                options.map( thing => (
                    <p>{thing}</p>
                ))
            }
        </div>
    )
}

export default Options;