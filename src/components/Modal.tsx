import { ClassNames, CSSObject } from '@emotion/react'
import { useCallback, useEffect } from 'react'
import ReactModal, { setAppElement } from 'react-modal'

type PropsType = {
  readonly children: JSX.Element
  readonly contentLabel?: string
  readonly isOpen: boolean
  readonly onRequestClose?: () => void
}

const overlayRules: CSSObject = {
  backgroundColor: 'rgba(124, 124, 129, 0.5)',
  bottom: 0,
  left: 0,
  opacity: 0,
  overflowY: 'auto',
  paddingTop: '10rem',
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'opacity 0.333s',
  zIndex: 2000,
}

const modalRules: CSSObject = {
  backgroundColor: '#fff',
  border: '5px solid #fff',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '80.75rem',
  minHeight: '100vh',
  outline: 0,
  overflow: 'auto',
  paddingBottom: '1.25rem',
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
  paddingTop: '5rem',
  position: 'relative',
  '@media (min-width: 47.5em)': {
    paddingBottom: '5rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
  },
}

const show: CSSObject = {
  // @ts-ignore bad upstream typing..
  opacity: '1 !important',
}

const hide: CSSObject = {
  // @ts-ignore bad upstream typing..
  opacity: '0 !important',
}

// @see: https://github.com/reactjs/react-modal#app-element
const isTest = process.env.NODE_ENV === 'test'
if (document != null && !isTest) {
  setAppElement('body')
}

// -------------------------------------

const Modal = ({
  children,
  contentLabel,
  isOpen,
  onRequestClose,
  ...props
}: PropsType) => {
  const handleOpen = useCallback(() => {
    const el = document.body.querySelector('.ReactModalPortal > div')
    if (el != null) {
      requestAnimationFrame(() => (el.scrollTop = 0))
    }
  }, [])
  useEffect(() => handleOpen())
  return (
    <ClassNames>
      {({ css }) => (
        <ReactModal
          bodyOpenClassName="scrollIsDisabled"
          className={css(modalRules)}
          closeTimeoutMS={500}
          contentLabel={contentLabel}
          isOpen={isOpen}
          onAfterOpen={handleOpen}
          onRequestClose={onRequestClose}
          overlayClassName={{
            afterOpen: css(show),
            base: css(overlayRules),
            beforeClose: css(hide),
          }}
          {...props}
        >
          {children}
        </ReactModal>
      )}
    </ClassNames>
  )
}

Modal.defaultProps = {
  contentLabel: 'Modal',
  onRequestClose: null,
}

export default Modal
