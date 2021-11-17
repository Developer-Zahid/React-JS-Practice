/* 
// Purpose : For Creating HTML Elements
   console.log(React);

// Purpose : For Printing or Rendering HTML Elements in DOM
   console.log(ReactDOM);
   ReactDOM.render( what would print , where would print )
*/

const domContainer = document.querySelector("#root");


/*
// With Pure React JS

const cardsElement = React.createElement(
    "div",
    {class: "container"},
    React.createElement(
        "div",
        {class: "card"},
        React.createElement(
            "h1",
            {class: "card__counter"},
            "0"
        ),
        React.createElement(
            "button",
            {
                type: "button",
                class: "card__btn"
            },
            "Increment +"
        ),
    )
);

// ReactDOM.render(cardsElement, domContainer)
*/


/*
// With JSX

const cardsElement = (
    <div className="container">
        <div className="card">
            <h1 className="card__counter">0</h1>
            <button type="button" className="card__btn">Increment +</button>
        </div>
    </div>
);

// ReactDOM.render(cardsElement, domContainer)
*/


/*
// With Function
*/

const CardsElement = ()=>{
    // const reactState = React.useState(0);
    // console.log(reactState)

    const [counter, setCounter] = React.useState(0);

    return(
        <div className="card">
            <h1 className="card__counter">{counter}</h1>
            <button onClick={ ()=> setCounter(counter + 1) } type="button" className="card__btn">Increment +</button>
        </div>
    );
};

// ReactDOM.render(CardsElement(), domContainer);

ReactDOM.render(
    <div className="container">
        <CardsElement/>
        <CardsElement/>
        <CardsElement/>
    </div>,
     domContainer
);