import Styles from './form.module.css';
export default function Form(){
    return (
        <form className={Styles.form}>
            <input type="text" />
            <button>Add</button>
        </form>
    )
}