import {
  Fragment,
  memo,
  SyntheticEvent,
  useCallback,
  useRef,
  useState,
} from 'react'
import { useInView } from 'react-intersection-observer'
import X from './assets/X'
import Button from './components/Button'
import Container from './components/Container'
import Flex from './components/Flex'
import Grid from './components/Grid'
import Markdown from './components/Markdown'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import Tile from './components/Tile'
import View from './components/View'
import { about, home, projects } from './data.json'
import useDetectTouch from './hooks/useDetectTouch'
import useRowWidth from './hooks/useRowWidth'
import useScrollToAnchor from './hooks/useScrollToAnchor'
import getTileDimension from './hooks/useTileDimension'

const minHeight = 'calc(100vh - 10rem)'
const works = home.tiles.map((id) =>
  projects.find((project) => project.id.includes(`${id}.md`)),
)

type WorksType = Required<typeof works>
type ProjectType = typeof projects[0] | undefined

const Paddle = ({ ...props }) => (
  <Button
    css={{
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      transition: 'color 0.2s',
      '.no-touch &:hover': {
        color: '#000',
      },
    }}
    {...props}
  />
)

const App = () => {
  const [aboutRef, isAboutActive] = useInView({ threshold: 0.75 })
  const [project, setProject] = useState<ProjectType>()
  const rowRef = useRef(null)
  const rowWidth = useRowWidth(rowRef)
  const scrollToAnchor = useScrollToAnchor()
  useDetectTouch()

  const handleClickProject = useCallback((e: SyntheticEvent) => {
    const stuff = projects.find((project) => project.id === e.currentTarget.id)
    setProject(stuff)
  }, [])

  const handleCloseProject = useCallback(() => {
    setProject(undefined)
  }, [])

  const handleNextProject = useCallback(
    (e: SyntheticEvent) => {
      e.stopPropagation()
      const currentIndex = works.indexOf(project)
      const nextIndex = currentIndex === works.length - 1 ? 0 : currentIndex + 1
      const nextProject = works[nextIndex]
      setProject(nextProject)
    },
    [project],
  )

  const handlePrevProject = useCallback(
    (e: SyntheticEvent) => {
      e.stopPropagation()
      const currentIndex = works.indexOf(project)
      const prevIndex = currentIndex === 0 ? works.length - 1 : currentIndex - 1
      const prevProject = works[prevIndex]
      setProject(prevProject)
    },
    [project],
  )

  return (
    <Fragment>
      <Navbar
        handleClickToSection={scrollToAnchor}
        isAboutActive={isAboutActive}
      />
      <View as="main" role="main">
        <Grid as="section" css={{ minHeight }} id="work">
          <Container
            ref={rowRef}
            css={{
              alignItems: 'start',
              gridAutoRows: 0,
              gridGap: '0.25rem',
              gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
            }}
          >
            {(works as WorksType).map((work) => {
              const { width, height } = getTileDimension({
                allowableWidth: rowWidth,
                naturalWidth: work.tileWidth,
                naturalHeight: work.tileHeight,
              })
              return (
                <Tile
                  allowableWidth={rowWidth}
                  handleClick={handleClickProject}
                  id={work.id}
                  key={work.id}
                  src={work.tile}
                  title={work.title}
                  width={width}
                  height={height}
                />
              )
            })}
          </Container>
        </Grid>
        <Container>
          <View
            css={{
              height: 1,
              border: 0,
              backgroundColor: '#858585',
              margin: '5rem 0',
            }}
          />
        </Container>
        <Grid as="section" css={{ minHeight }} id="about" ref={aboutRef}>
          <Container>
            <Markdown source={about.body} />
          </Container>
        </Grid>
      </View>
      {project != null && (
        <Modal
          isOpen
          contentLabel={project.title}
          onRequestClose={handleCloseProject}
        >
          <Fragment>
            <Flex
              css={{
                position: 'fixed',
                right: '1rem',
                justifyContent: 'flex-end',
              }}
            />
            <Markdown source={project.body} />
            <Button
              css={{
                color: '#454545',
                position: 'fixed',
                right: '0.125rem',
                top: '0.625rem',
                transition: 'color 0.2s',
                '.no-touch &:hover': {
                  color: '#000',
                },
                '@media (min-width: 47.5em)': {
                  right: '1.25rem',
                  top: '4rem',
                },
              }}
              onClick={handleCloseProject}
              title="Close"
            >
              <X />
            </Button>
            <View css={{ color: '#858585', textAlign: 'right' }}>
              <Paddle onClick={handlePrevProject}>Prev</Paddle>
              <span> / </span>
              <Paddle onClick={handleNextProject}>Next</Paddle>
            </View>
          </Fragment>
        </Modal>
      )}
    </Fragment>
  )
}

export default memo(App)
