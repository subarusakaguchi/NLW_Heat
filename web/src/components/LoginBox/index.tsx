import { VscGithubInverted} from 'react-icons/vsc'
import styles from './styles.module.scss'

export function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e Compartilhe a sua Mensagem!</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Logar com GITHUB
      </a>
    </div>
  )
}