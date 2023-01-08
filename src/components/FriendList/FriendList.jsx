import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

import css from "./FriendList.module.css";

export const FrendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({id, avatar, name, isOnline }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}
        </ul>
    )
}

FrendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool
        })
    )
}