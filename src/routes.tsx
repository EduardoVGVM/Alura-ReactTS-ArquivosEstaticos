import PaginaPadrao from 'components/PaginaPadrao'
import Cardapio from 'pages/Cardapio'
import Inicio from 'pages/Inicio'
import Sobre from 'pages/Cardapio/Sobre'
import NotFound from 'pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Prato from 'pages/Prato'
import Menu from 'components/Menu'

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu/>
				<Routes>
					<Route path='/' element={<PaginaPadrao />}>
						<Route index element={<Inicio />} />
						<Route path='cardapio' element={<Cardapio />} />
						<Route path='sobre' element={<Sobre />} />
						<Route path='prato/:id' element={<Prato/>}/>
					</Route>
					<Route path='*' element={<NotFound />}/>
				</Routes>
			</Router>
		</main>
	)
}