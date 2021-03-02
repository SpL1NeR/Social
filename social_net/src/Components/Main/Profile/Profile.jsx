import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsConteiner from './posts/PostsConteiner';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo status={props.status} updateStatus={props.updateStatus} profile={props.profile} />
            <PostsConteiner />
        </div>
    )
}

export default Profile;