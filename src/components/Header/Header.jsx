import React, { Component } from 'react';

//separate Header component for header fun. copyright Mystery Science Theater 3000 and the respective movies the quotes are from.
class Header extends Component {

    state = {
        quotes: [
            `Isn't the fact that it's Universal make it International?`,
            `Passed from editor to editor in a desperate attempt to save it!`,
            `Whoa, huge slam on anteaters out of nowhere!`,
            `Ah parking! What a great way to establish character and create tension!`,
            `Science and Industry! See big men sticking screw drivers into things - turning them - AND ADJUSTING THEM! Build your very own Atom Storage Box!`,
            `Uh, will the gentleman by the pool please discontinue the song? And watch out for snakes.`
        ]
    }


    render() {

        //yes, yes, editing title/description will cause it to re-render and generate a new quote on each keypress. time constraints, time constraints.
        let randomNumber = Math.floor(Math.random() * 6)
        
        let quote = this.state.quotes[randomNumber]


        return (
            <div className="appHeader" color="primary">
                {/* <h1>Isn't the fact that it's Universal <i>make</i> it International?</h1> */}
                <h1>{quote}</h1>
                <img className="headerImage" src="https://minnesota.cbslocal.com/wp-content/uploads/sites/15909630/2014/11/mst3k-silouette.jpg?w=994&h=491&crop=1" alt="Mystery Science Theater 3000 logo"/>
            </div>
        );
    }
}

export default Header;
