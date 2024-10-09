import { Link } from 'react-router-dom'
import bottom_line from '../../images/bottom_line.svg'
import styles from './Settings.module.scss'
// import images
import arrow from '../../images/arrow.svg'
import pencil from '../../images/penci_group.svg'
import profile_setting from '../../images/profile_setting.svg'

export const Settings = () => {
	return (
		<div className={styles.setting}>
			<div className={styles.links}>
				<Link className={styles.active_link} to='/editProfile'>
					Edit Profile
					<img
						className={styles.active_line}
						src={bottom_line}
						alt='bottom_line'
					/>
				</Link>
				<Link className={styles.link} to='/preferences'>
					Preferences
				</Link>
				<Link className={styles.link} to='/security'>
					Security
				</Link>
			</div>
			<div className={styles.profile_inputs}>
				<div className={styles.profile}>
					<img
						className={styles.image_profile}
						src={profile_setting}
						alt='profile'
					/>
					<img className={styles.image_pencil} src={pencil} alt='pencil' />
				</div>
				<div className={styles.inputs_box}>
					<div className={styles.inputs}>
						<div className={styles.input}>
							<label className={styles.label} htmlFor=''>
								Your Name
							</label>
							<input
								className={styles.input_field}
								placeholder='Charlene Reed'
								type='text'
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.label} htmlFor=''>
								Email
							</label>
							<input
								className={styles.input_field}
								placeholder='charlenereed@gmail.com'
								type='email'
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.label} htmlFor=''>
								Date of Birth
							</label>
							<div className={styles.input_birth}>
								<input
									className={styles.input_field}
									type='text'
									placeholder='25 January 1990'
								/>
								<img className={styles.arrow} src={arrow} alt='arrow' />
							</div>
						</div>
						<div className={styles.input}>
							<label className={styles.label} htmlFor=''>
								Permanent Address
							</label>
							<input
								className={styles.input_field}
								placeholder='San Jose, California, USA'
								type='text'
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.label} htmlFor=''>
								Postal Code
							</label>
							<input
								className={styles.input_field}
								placeholder='45962'
								type='number'
							/>
						</div>
					</div>
					<div className={styles.inputs}>
						<div className={styles.input}>
							<label className={styles.label} htmlFor=''>
								User Name
							</label>
							<input
								className={styles.input_field}
								placeholder='Charlene Reed'
								type='text'
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.label} htmlFor=''>
								Password
							</label>
							<input
								className={styles.input_field}
								placeholder='**********'
								type='password'
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.label} htmlFor=''>
								Present Address
							</label>
							<input
								className={styles.input_field}
								placeholder='San Jose, California, USA'
								type='text'
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.label} htmlFor=''>
								City
							</label>
							<input
								className={styles.input_field}
								placeholder='San Jose'
								type='text'
							/>
						</div>
						<div className={styles.input}>
							<label className={styles.label} htmlFor=''>
								Country
							</label>
							<input
								className={styles.input_field}
								placeholder='USA'
								type='text'
							/>
						</div>
					</div>
				</div>
			</div>
			<button className={styles.save}>Save</button>
		</div>
	)
}
