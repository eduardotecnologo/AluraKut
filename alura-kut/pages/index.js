import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons.js';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
  return (
    <Box as="aside">
        <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
          <hr />
            <p>
              <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
              @{props.githubUser}
              </a>
          </p>
        <hr />
      <AlurakutProfileSidebarMenuDefault/>
      </Box>
  )
}

export default function Home() {
  const githubUser = 'eduardotecnologo';
  const [comunidades, setComunidades] = React.useState([{
    id: '656516516161515611561616151651',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const pessoasFavoritas = [
    'omariosouto',
    'yanagassi',
    'fabianoobispo',
    'peas',
    'juunegreiros',
    'edudevjob'];

    return (
      <>
        <AlurakutMenu />
        <MainGrid>
          <div className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar githubUser={githubUser} />
          </div>
          <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
            <Box>
              <h1 className="title">
                Bem vindo(a) 
              </h1>
              <OrkutNostalgicIconSet />
            </Box>

            <Box>
              <h2 className="subTitle">O que você deseja fazer?</h2>
              <form onSubmit={function handleCreate(e){
                e.preventDefault();
                const dataToForm = new FormData(e.target);
                const comunidade = {
                  id: new Date().toISOString(),
                  title: dataToForm.get('title'),
                  image: dataToForm.get('image')
                }

                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas);
              }}>
                <div>
                  <input placeholder="Qual vai ser o nome da sua comunidade?" 
                        name="title" 
                        aria-label="Qual vai ser o nome da sua comunidade?"
                        type="text"/>
                </div>
                <div>
                  <input placeholder="Coloque uma URL para usarmos de capa" 
                        name="image" 
                        aria-label="Coloque uma URL para usarmos de capa"
                        type="text"/>
                </div>
                <button>Criar comunidade</button>
              </form>
            </Box>
          </div>
          <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
                Comunidades ({comunidades.length})
              </h2>
            <ul>
                {comunidades.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id}>
                      <a href={`/users/${itemAtual.title}`}>
                        <img src={itemAtual.image} />
                        <span>{itemAtual.title}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Pessoas da comunidade ({pessoasFavoritas.length})
              </h2>
  
              <ul>
                {pessoasFavoritas.map((itemAtual) => {
                  return (
                    <li key={itemAtual}>
                      <a href={`/users/${itemAtual}`}>
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>
          </div>
        </MainGrid>
      </>
    )
  }