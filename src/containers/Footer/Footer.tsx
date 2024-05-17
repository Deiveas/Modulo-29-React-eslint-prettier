// Footer.tsx
import React from 'react'
import { Rodape } from './styles'

const Footer: React.FC = () => {
  return (
    <footer>
      <Rodape>
        © {new Date().getFullYear()} Desenvolvido por Deive Silva. Todos os
        direitos reservados.
      </Rodape>
    </footer>
  )
}

export default Footer
