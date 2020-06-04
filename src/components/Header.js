import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-top">
                    <img src= {logo} />
                </div>
            </div>
        );
    }
}

export default Header;

