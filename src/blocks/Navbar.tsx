import React, { memo, SyntheticEvent } from 'react'
import Mark from '../assets/Mark'
import Container from '../elements/Container'
import Flex from '../elements/Flex'
import Grid from '../elements/Grid'
import Link from '../elements/Link'
import Text from '../elements/Text'
import View from '../elements/View'

const getLinkStyle = ({ isActive }: { isActive?: boolean }) => ({
  borderBottom: `1px solid ${
    isActive === true ? 'currentColor' : 'transparent'
  }`,
  color: isActive === true ? '#000' : 'currentColor',
  transition: 'color 0.333s',
  '.no-touch &:hover': {
    color: '#000',
  },
})

type PropsType = {
  handleClickToSection: (e: SyntheticEvent) => void
  isAboutActive: boolean
}

const Navbar = ({ handleClickToSection, isAboutActive }: PropsType) => (
  <Flex
    as="nav"
    css={{
      alignItems: 'center',
      backgroundColor: '#fff',
      color: '#7c7c7c',
      fontSize: '0.75rem',
      fontWeight: 700,
      height: '10rem',
      position: 'sticky',
      textTransform: 'uppercase',
      top: 0,
      zIndex: 5,
    }}
    role="navigation"
  >
    <Container
      css={{
        '@media (min-width: 47.5em)': {
          gridTemplateColumns: '5rem 1fr 5rem',
        },
      }}
    >
      <View
        css={{
          '@media (max-width: 47.4375em)': {
            display: 'none',
          },
        }}
      >
        <Link href="/" onClick={handleClickToSection} title="AK Design">
          <Mark />
        </Link>
      </View>
      <Grid css={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text
          as="h1"
          css={{
            fontSize: 'inherit',
            fontWeight: 400,
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          <strong>Hi. </strong>
          <span>
            If you like what you see below perhaps we can work together in the
            future.
          </span>
        </Text>
        <Flex
          css={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link
            css={getLinkStyle({ isActive: !isAboutActive })}
            href="/"
            onClick={handleClickToSection}
            title="View Work"
          >
            Work
          </Link>
          <Text css={{ padding: '0 0.5rem' }}>&bull;</Text>
          <Link
            css={getLinkStyle({ isActive: isAboutActive })}
            href="#about"
            onClick={handleClickToSection}
            title={`About AK Design ${isAboutActive}`}
          >
            About
          </Link>
          <Text css={{ padding: '0 0.5rem' }}>&bull;</Text>
          <Link
            css={getLinkStyle({ isActive: false })}
            href="mailto:amy.kitt@gmail.com"
            title="Say hello!"
          >
            Contact
          </Link>
        </Flex>
      </Grid>
    </Container>
  </Flex>
)

export default memo(Navbar)
