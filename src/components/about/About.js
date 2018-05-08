import React from 'react';

const About = () => (
    <div className="container">
        <div className="jumbotron mt-2 bg-dark text-white">
            <h1 className="display-3 text-white">About</h1>
            <p className="lead text-white">
                Carnage Quake League is an esports organization for non-pro players.
                We host Uniorz Challenge cups in Quake Champions and Quake Live.
                We also have an active Discord community.
            </p>
            <hr className="my-4 bg-light"/>
                <h4 className="text-white">Social links:</h4>
            <ul>
                <li><a href="https://discord.gg/XRKU4py" className="text-white">Discord</a></li>
                <li><a href="https://vk.com/carnage_ql" className="text-white">VK</a></li>
                <li><a href="https://carnage.challonge.com/" className="text-white">Challonge</a></li>
                <li><a href="http://donatepay.ru/donation/uniorz" className="text-white">Donatepay</a></li>
            </ul>      
        </div>
        <div className="mb-3">
            <iframe title="Discord" src="https://discordapp.com/widget?id=376346568468463616&theme=dark" height="500" allowtransparency="true" frameborder="0"></iframe>
        </div> 
    </div>
);

export default About;
