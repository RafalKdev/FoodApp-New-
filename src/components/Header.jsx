import classes from "./Header.module.css";
import logoImg from "../assets/logo.jpg";
const Header = () => {
  return (
    <header className={classes.mainHeader}>
      <div className={classes.wrapper}>
        <img src={logoImg} alt="A resturant" />
        <h1 className={classes.title}>React Food</h1>
      </div>
      <nav>
        <button className={classes.button}>Cart (0)</button>
      </nav>
    </header>
  );
};
export default Header;
