// Projeto.tsx
import React from 'react'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './stylesProjeto'

interface ProjetoProps {
  name: string
  description: string
  url: string
}

const Projeto: React.FC<ProjetoProps> = ({ name, description, url }) => (
  <Card style={{ height: '150px' }}>
    {' '}
    {/* Defina a altura desejada aqui */}
    <Titulo>{name}</Titulo>
    <Paragrafo tipo="secundario">{description}</Paragrafo>
    <LinkBotao href={url} target="_blank" rel="noopener noreferrer">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
