// Projetos.tsx
import React, { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './stylesProjetos'

interface RepoData {
  id: number
  name: string
  description: string
  html_url: string
}

const Projetos: React.FC = () => {
  const [repos, setRepos] = useState<RepoData[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/deiveas/repos'
        )
        const data = await response.json()
        setRepos(data)
      } catch (error) {
        console.error('Erro ao buscar os repositórios:', error)
      }
    }

    fetchRepos()
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repos.map((repo) => (
          <li key={repo.id}>
            {/* Passando as propriedades corretamente para o componente Projeto */}
            <Projeto
              name={repo.name}
              description={repo.description}
              url={repo.html_url}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
