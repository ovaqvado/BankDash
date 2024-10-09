import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
// Imports images
import credit_card from '../../images/credit-card.svg'
import dashboard from '../../images/dashboard.svg'
import hand_money from '../../images/hand-money.svg'
import investments from '../../images/investment.svg'
import lamp_money from '../../images/lamp_money.svg'
import line from '../../images/line.svg'
import services from '../../images/service.svg'
import settings from '../../images/settings_bold.svg'
import transaction from '../../images/transaction.svg'
import accounts from '../../images/user.svg'

export const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<Link className={styles.link} to='/'>
				<img src={dashboard} alt='dashboard' />
				<span>Dashboard</span>
			</Link>
			<Link className={styles.link} to='/transactions'>
				<img src={transaction} alt='transactions' />
				<span>Transactions</span>
			</Link>
			<Link className={styles.link} to='/accounts'>
				<img src={accounts} alt='accounts' />
				<span>Accounts</span>
			</Link>
			<Link className={styles.link} to='/investments'>
				<img src={investments} alt='investments' />
				<span>Investments</span>
			</Link>
			<Link className={styles.link} to='/creditCards'>
				<img src={credit_card} alt='credit-card' />
				<span>Credit Cards</span>
			</Link>
			<Link className={styles.link} to='/loans'>
				<img src={hand_money} alt='loans' />
				<span>Loans</span>
			</Link>
			<Link className={styles.link} to='/services'>
				<img src={services} alt='services' />
				<span>Services</span>
			</Link>
			<Link className={styles.link} to='/privileges'>
				<img src={lamp_money} alt='privileges' />
				<span>My Privileges</span>
			</Link>
			<Link className={styles.active_link} to='/settings'>
				<img className={styles.active_line} src={line} alt='line' />
				<img className={styles.active_image} src={settings} alt='settings' />
				<span>Settings</span>
			</Link>
		</div>
	)
}
