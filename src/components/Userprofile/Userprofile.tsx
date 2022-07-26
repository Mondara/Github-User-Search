import React from 'react';
import './Userprofile.css';

import User from '../../interfaces/interfaces';

interface UserProfile {
    user: User;
}

export default function Userprofile({ user }: UserProfile) {
    console.log(user);
    return (
        <div className="userinfo-container">

            <div className="userinfo-avatar">
                <img src={user.avatar_url} alt="User Avatar" />
            </div>

            <div className="userinfo-profile">
                <h1 className="userinfo-name">{user.name}</h1>
                <p className="userinfo-date">Joined 26 Jan 2011</p>
                <p className="userinfo-login">{`@${user.login}`}</p>
                <p className="userinfo-bio">{user.bio}</p>
            </div>

            <div className="userinfo-stats">
                <div className="userinfo-stats-container">
                    <p className="userinfo-statName">Repos</p>
                    <p className="userinfo-stat">{user.public_repos}</p>
                </div>
                <div className="userinfo-stats-container">
                    <p className="userinfo-statName">Followers</p>
                    <p className="userinfo-stat">{user.followers}</p>
                </div>
                <div className="userinfo-stats-container">
                    <p className="userinfo-statName">Following</p>
                    <p className="userinfo-stat">{user.following}</p>
                </div>
            </div>
            <div className="userinfo-links">
                <div className="userinfo-links-container location">
                    <img className="logo" src="/src/assets/icon-location.svg" alt="Location Pin Icon" />
                    <p className="userinfo-link">{user.location}</p>
                </div>
                <div className="userinfo-links-container twitter">
                    <img className="logo" src="/src/assets/icon-twitter.svg" alt="Twitter Icon" />
                    <a className="userinfo-link" href={`https://twitter.com/${user.twitter_username}`} >{user.twitter_username}</a>
                </div>
                <div className="userinfo-links-container website">
                    <img className="logo" src="/src/assets/icon-website.svg" alt="Chain Icon" />
                    <p className="userinfo-link">{user.blog}</p>
                </div>
                <div className="userinfo-links-container company">
                    <img className="logo" src="/src/assets/icon-company.svg" alt="Building Icon" />
                    <a className="userinfo-link" href={`https://github.com/${user.company?.replace('@', '')}`}>{user.company}</a>
                </div>
            </div>
        </div>
    )
}