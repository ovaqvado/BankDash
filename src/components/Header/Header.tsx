import styles from './Header.module.scss'
// import image
import cards from '../../images/cards.svg'
import navbar from '../../images/navbar.svg'
import notify from '../../images/notify.svg'
import profile from '../../images/profile.svg'
import search from '../../images/search.svg'
import settings from '../../images/settings_border.svg'

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header_box}>
				<div className={styles.navbar}>
					<img src={navbar} alt='' />
				</div>
				<div className={styles.logo}>
					<img className={styles.logo_image} src={cards} alt='logo_image' />
					<span className={styles.logo_text}>BankDash.</span>
				</div>
				<p className={styles.setting}>Setting</p>
				<div className={styles.search_btn}>
					<div className={styles.search_box}>
						<img className={styles.input_image} src={search} alt='' />
						<input
							className={styles.input_search}
							placeholder='Search for something'
							type='search'
						/>
					</div>
					<div className={styles.button}>
						<img src={settings} alt='settings' />
					</div>
					<div className={styles.button}>
						<img src={notify} alt='notify' />
					</div>
				</div>
				<img className={styles.profile} src={profile} alt='profile' />
			</div>
			<div className={styles.search_mobile}>
				<img className={styles.input_image_mobile} src={search} alt='' />
				<input
					className={styles.input_search_mobile}
					placeholder='Search for something'
					type='search'
				/>
			</div>
		</div>
	)
}
