function Card(props) {
    return (
      <>
        <div className="card text-center" style={{width :'500px', margin:'10px'}}>
            <img className="imgSize"
                src={props.imgsrc}
                alt="Card demos"
                width="100%"
                height="300"
                
            />
            <div className="card-body" className="text-center" style={{margin:'10px'}}>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.sname}</p>
                <a href={props.link} >
                    <button>Know More!!</button>
                </a>
            </div>
        </div>
    
        </>);
}

export default Card;
