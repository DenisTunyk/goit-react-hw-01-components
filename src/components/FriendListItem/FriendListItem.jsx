import css from "./FriendListItem.module.css"

export const FriendListItem = ({ avatar, name, isOnline }) => {
    
    const className = [css.status];

    isOnline ? className.push(css.green) : className.push(css.red);

        
    return (
        <li className={css.item}>
            <span className={className.join(" ")}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}