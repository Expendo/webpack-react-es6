/**
 * Created by Ekko on 2016/5/12.
 */
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import AboutHandler from './about.jsx';
import SkillHandler from './index.jsx';
import OthersHandler from './skill.jsx';
import '../less/main.less';

let App = React.createClass({
    render(){
        return (
            <section className='main'>
            <div className="my-nav">
              <div className="logo">
               <img src="./img/logo.png"/>
              </div>
                <ul className="navbar nav-pills nav-stacked">
                 <li><Link to="main" className="home">HOME</Link></li>
                 <li><Link to="skill" className="skill">Skill</Link></li>
                 <li><Link to="others" className="others">Others</Link></li>
                </ul>
            </div>
            <div className="content"><RouteHandler/></div>
            </section>
        ); 
    }
});

let routes = (
    <Route name="main" path="/" handler={App}>
    <DefaultRoute handler={AboutHandler}/>
    <Route name="skill" path="/skill" handler={SkillHandler}/>
    <Route name="others" path="/others" handler={OthersHandler}/>

    </Route>
);
Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('react'));
});