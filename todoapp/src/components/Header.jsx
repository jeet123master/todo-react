import Styles from './header.module.css';
export default function Header(){
    return(
        <div className={Styles.header}>
            <h2>My Todo App</h2>
        </div>
    )
}