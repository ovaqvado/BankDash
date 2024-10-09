import styles from './App.module.scss'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Router } from './Router/Router'

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<div className={styles.box}>
				<Navbar />
				<Router />
			</div>
		</div>
	)
}

export default App
