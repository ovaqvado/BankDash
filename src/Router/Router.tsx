import { Route, Routes } from 'react-router-dom'
import { Accounts } from '../page/Accounts/Accounts'
import { CreditCards } from '../page/CreditCards/CreditCards'
import { Dashboard } from '../page/Dashboard/Dashboard'
import { ErrorPage } from '../page/ErrorPage/ErrorPage'
import { Investments } from '../page/Investments/Investments'
import { Loans } from '../page/Loans/Loans'
import { Privileges } from '../page/MyPrivileges/Privileges'
import { Preferences } from '../page/Preferences/Preferences'
import { Security } from '../page/Security/Security'
import { Services } from '../page/Services/Services'
import { Settings } from '../page/Settings/Settings'
import { Transactions } from '../page/Transactions/Transactions'

export const Router = () => {
	return (
		<Routes>
			{/* NavBar routing */}
			<Route path='/' element={<Dashboard />} />
			<Route path='/transactions' element={<Transactions />} />
			<Route path='/accounts' element={<Accounts />} />
			<Route path='/investments' element={<Investments />} />
			<Route path='/creditCards' element={<CreditCards />} />
			<Route path='/loans' element={<Loans />} />
			<Route path='/services' element={<Services />} />
			<Route path='/privileges' element={<Privileges />} />
			<Route path='/settings' element={<Settings />} />
			{/* Routing in settings */}
			<Route path='/preferences' element={<Preferences />} />
			<Route path='/security' element={<Security />} />
			{/* Error page 404 */}
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	)
}
