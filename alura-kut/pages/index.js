import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons.js';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
  return (
    <Box>
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
          {/* <Box style="grid-area: profileArea;"> */}
          <div className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar githubUser={githubUser} />
          </div>
          <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
            <Box>
              <h1 className="title">
                Bem vindo(a) 
              </h1>b
  
              <OrkutNostalgicIconSet />
            </Box>
            <Box>
              <h2>O que você deseja fazer?</h2>
              <form>
                <div>
                  <input placeholder="Qual vai ser o nome da sua comunidade?" 
                        name="title" 
                        aria-label="Qual vai ser o nome da sua comunidade?"
                        type="text"/>
                </div>
                <div>
                  <input placeholder="Coloque uma URL para usarmos de capa" 
                        name="title" 
                        aria-label="Coloque uma URL para usarmos de capa"
                        type="text"/>
                </div>
              </form>
            </Box>
          </div>
          <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Pessoas da comunidade ({pessoasFavoritas.length})
              </h2>
  
              <ul>
                {pessoasFavoritas.map((itemAtual) => {
                  return (
                    <li>
                      <a href={`/users/${itemAtual}`} key={itemAtual}>
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