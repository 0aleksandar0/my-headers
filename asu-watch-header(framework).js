import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.png"/>
            <NavMenu>
                <a>
                    <img alt="" src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img alt="" src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img alt="" src="/images/watchlist-icon.svg" />
                    <span>watchlist</span>
                </a>
                <a>
                    <img alt="" src="/images/original-icon.svg" />
                    <span>originals</span>
                </a>
                <a>
                    <img alt="" src="/images/movie-icon.svg" />
                    <span>movies</span>
                </a>
                <a>
                    <img alt="" src="/images/series-icon.svg" />
                    <span>series</span>
                </a>

            </NavMenu>
            <UserImg src="/images/me.jpg"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-item: center;
    padding: 0 16px;
`

const Logo = styled.img`
    width: 110px;
    height: 60px;
    padding: 5px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    text-transform: uppercase;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0; /*hiding*/
                transform-origin: left center; 
                transition: all 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94); /* makes a delayed effect*/
                transform: scaleX(0); /*hiding*/
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    margin-top: 10px;
    margin-right: 5px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`