import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import '../styles/HomePage.scss';

interface HomePageProps extends RouteComponentProps<{}> {}

const HomePage = (props: HomePageProps) => {
    return (
        <div>
            <h1 className="title">Hello, World!</h1>
            <p className="subtitle">Test for Bulma CSS integration.</p>
            <p>Here is my current path: {props.match.path}</p>
        </div>
    );
}

export default HomePage;