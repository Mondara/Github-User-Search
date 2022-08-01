import React from 'react';
import './Userprofile.css';

import { ReactComponent as LocationSVG } from '../../assets/icon-location.svg';
import { ReactComponent as CompanySVG } from '../../assets/icon-company.svg';
import { ReactComponent as TwitterSVG } from '../../assets/icon-twitter.svg';
import { ReactComponent as WebsiteSVG } from '../../assets/icon-website.svg';


import User from '../../interfaces/interfaces';

interface UserProfile {
    user: User;
}

export function Userprofile({ user }: UserProfile) {
    console.log(user)
    return (
        <div className="userinfo-container">

            <div className="userinfo-profile">
                <img className="userinfo-avatar" src={user.avatar_url} alt="User Avatar" />
                <h1 className="userinfo-name">{user.name || user.login}</h1>
                <p className="userinfo-date">{`Joined ${user.created_at}` }</p>
                <p className="userinfo-login">{`@${user.login}`}</p>
                <p className="userinfo-bio">{user.bio || "This profile has no bio."}</p>
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
                <div className="userinfo-links-container  location">
                    <LocationSVG className="userinfo-links-icon" />
                    <p className="userinfo-link">{user.location || "Not Available"}</p>
                </div>
                <div className="userinfo-links-container twitter">
                    <TwitterSVG />
                    {user.twitter_username ?
                        <a className="userinfo-link" target="_blank" href={`https://twitter.com/${user.twitter_username}`} >{user.twitter_username}</a>
                        :
                        <p className="userinfo-link">Not Available</p>
                    }
                </div>
                <div className="userinfo-links-container website">
                    <WebsiteSVG />
                    {user.blog ?
                        <a className="userinfo-link" href={user.blog}>Website</a> :
                        <p className="userinfo-link"> Not Available</p>
                    }
                </div>
                <div className="userinfo-links-container company">
                    <CompanySVG />
                    {user.company ?
                        <a className="userinfo-link" target="_blank" href={`https://github.com/${user.company?.replace('@', '')}`}>{user.company}</a>
                        :
                        <p className="userinfo-link">Not Available</p>
                    }
                </div>
            </div>
        </div>
    )
}