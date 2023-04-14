import cardapio from './itens.json'
import Item from './Item'
import styles from './Itens.module.scss'
import { useEffect, useState } from 'react'

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Itens(props: Props) {

  const [lista, setLista] = useState(cardapio)
  const { busca, filtro, ordenador } = props

  useEffect(() => {
    const novaLista = cardapio.filter(item => testarBusca(item.title) && testarFiltro(item.category.id))
    setLista(ordenar(novaLista))
  }, [busca, filtro, ordenador])

  function testarBusca(title: string) {
    const regex = new RegExp(busca, 'i')
    return regex.test(title)
  }

  function testarFiltro(id: number) {
    if (filtro !== null) return filtro === id
    return true
  }

  const ordenarPropriedade = (
    lista: typeof cardapio,
    propriedade: 'size' | 'serving' | 'price'
  ) => {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  };

  const ordenar = (novaLista: typeof cardapio) => {
    switch (ordenador) {
      case 'porcao':
        return ordenarPropriedade(novaLista, 'size');
      case 'qtd_pessoas':
        return ordenarPropriedade(novaLista, 'serving');
      case 'preco':
        return ordenarPropriedade(novaLista, 'price');
      default:
        return novaLista;
    }
  };

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}
