import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import slide01 from "./imgs/slide01.png";
import slide02 from "./imgs/slide02.png";
import slide03 from "./imgs/slide03.png";
import snake from "./imgs/snake.png";
import fifteenpuzzle from "./imgs/fifteenpuzzle.png";
import reacteroids from "./imgs/reacteroids.png";
import { Link } from "react-router-dom";

//react component that renders the homepage of the application
export class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="intro">

                    <ControlledCarousel />
                </div>
                <CardList />

            </div>
        )

    }
}

//react component that renders a react-bootstrap carousel
export class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        /*alert(`selected=${selectedIndex}, direction=${e.direction}`);*/
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img width={1150} height={500} alt="900x500" src={slide01} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1150} height={500} alt="900x500" src={slide02} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1150} height={500} alt="900x500" src={slide03} />
                </Carousel.Item>
            </Carousel>
        );
    }
}

//react component that renders a card with game information in it
export class GameCard extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch">

                <div className="card w-100 text-center mb-4">
                    <Link className="gameLink" to={this.props.info.link}>
                        <img className="card-img-top" src={this.props.info.img} alt="Top of card" />
                        <div className="card-body">
                            <h3 className="card-title">{this.props.info.title}</h3>
                            <p className="card-text">
                                {this.props.info.text}
                            </p>
                        </div>
                    </Link>
                    {this.props.link}
                </div>

            </div>
        )
    }
}

//React component that renders a list of bootstrap cards with game information, pictures, and names
export class CardList extends Component {
    render() {
        let games = [{ title: "Reacteroids", img: reacteroids, text: "Developed By:", link: "/reacteroids" },
        { title: "Snake", img: snake, text: "Developed By: Mitchell Francisco", link: "/snake" },
        { title: "Fifteen Puzzle", img: fifteenpuzzle, text: "Developed By: Blake Franzen", link: "/fifteen" }];
        return (
            <div className="cardlist row">
                {games.map((d, i) => {
                    if (d.title === "Reacteroids") {
                        return <GameCard key={"item-" + i} info={d} link={<a title="GitHub repo" href="https://github.com/chriz001/Reacteroids">chriz001</a>} />
                    } else {
                        return <GameCard key={"item-" + i} info={d} />
                    }
                })}
            </div>
        )
    }
}