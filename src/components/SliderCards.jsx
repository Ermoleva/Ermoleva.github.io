import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {Component} from "react";
import Slider from "react-slick";
import CardUser from "./CardUser";
import styles from "../styles/SliderCards.module.scss"

export default class MultipleRows extends Component {
    state = {
        users: [],
        search: this.props.search
    }

    // filterUsers = (searchText, listOfUsers) => {
    //     if (!searchText) {
    //         return listOfUsers;
    //     }
    //     return listOfUsers.filter(({user}) =>
    //         user.toLowerCase().includes(searchText.toLowerCase())
    //     )
    // }


    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const users = response.data;
                this.setState({users})
            })
    }


    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            speed: 1000,
            rows: 2,
            centerPadding: 0,
            slidesPerRow: 2,
            arrows: false,
        };

        return (

            <Slider ref={slider => (this.props.setSlider(slider))} {...settings}>
                {this.state.users.map((data, index) => {
                    return (
                        <div key={index} className={styles.card_wrapper}>
                            <CardUser
                                useSmall={this.props.userId > 0}
                                name={data.name}
                                email={data.email}
                                number={data.phone}
                                click={() => this.props.setUserId(this.props.userId === parseInt(data.id) ? 0 : data.id)}
                            ></CardUser>
                        </div>
                    )
                })}
            </Slider>
        );
    }
}