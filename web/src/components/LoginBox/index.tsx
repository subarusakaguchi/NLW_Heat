import { useContext } from 'react'
import { VscGithubInverted} from 'react-icons/vsc'
import styles from './styles.module.scss'
import { AuthContext } from '../../contexts/auth'

export function LoginBox() {
  const { signInURL } = useContext(AuthContext)

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e Compartilhe a sua Mensagem!</strong>
      <a href={signInURL} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Logar com GITHUB
      </a>
    </div>
  )
}