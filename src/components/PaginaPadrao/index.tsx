import Header from 'components/Header'
import stylesTema from 'styles/Tema.module.scss'
import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer'

export default function PaginaPadrao() {
	return (
		<>
			<Header />
			<div className={stylesTema.container}>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}
