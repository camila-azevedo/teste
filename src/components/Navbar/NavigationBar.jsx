import styles from "./Navbar.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        <img
          src="/regiimento.png"
          alt="REGIIMENTO"
          className={styles.logoImg}
        />
        <span className={styles.logoText}>R.E.G.I.I.M.E.N.T.O</span>
      </a>
      <ul className={styles.navLinks}>
        <li>
          <a href="#sobre-nos">Sobre Nós</a>
        </li>
        <li>
          <a href="/integrantes">Integrantes</a>
        </li>
        <li>
          <a href="/eventos">Eventos</a>
        </li>
        <li>
          <a href="/conteudo">Conteúdo Acadêmico</a>
        </li>
      </ul>
      <div className={styles.navButtons}>
        <button className={styles.loginBtn}>Área do Interessado</button>
      </div>
    </nav>
  );
};
export default NavigationBar;
