// @flow
import React from 'react'
import css from '../styles/css'

type Props = {
  allowableWidth: number,
  className?: string,
  src: string,
  naturalHeight: number,
  naturalWidth: number,
  onLoadSuccess?: Function | null,
  onLoadFailure?: Function | null,
}

const style = css({
  backgroundColor: '#7c7c7c',
})

export default class extends React.PureComponent {
  props: Props
  img: ?Image

  static defaultProps = {
    className: '',
    onLoadSuccess: null,
    onLoadFailure: null,
  }

  componentDidMount() {
    this.createLoader()
  }

  componentDidUpdate(prevProps: Props) {
    if (!this.img && prevProps.src !== this.props.src) {
      this.createLoader()
    }
  }

  componentWillUnmount() {
    this.disposeLoader()
  }

  onLoadSuccess = () => {
    if (typeof this.props.onLoadSuccess === 'function') {
      this.props.onLoadSuccess(this.img)
    }
    this.disposeLoader()
  }

  onLoadFailure = () => {
    this.disposeLoader()
    if (typeof this.props.onLoadFailure === 'function') {
      this.props.onLoadFailure()
    }
  }

  getDimensions() {
    const { allowableWidth, naturalWidth, naturalHeight } = this.props
    const ratio = naturalWidth ? naturalWidth / naturalHeight : NaN
    const maxCellHeight = 1200
    const widthConstrainedRelativeHeight = Math.round(allowableWidth * (1 / ratio))
    const height = Math.min(widthConstrainedRelativeHeight, naturalHeight, maxCellHeight)
    const width = Math.round(height * ratio)
    return { width, height }
  }

  createLoader() {
    this.disposeLoader()
    if (!this.props.src || !this.props.onLoadSuccess) { return }
    this.img = new Image()
    this.img.onload = this.onLoadSuccess
    this.img.onerror = this.onLoadFailure
    this.img.src = this.props.src
  }

  disposeLoader() {
    if (!this.img) { return }
    this.img.onload = null
    this.img.onerror = null
    this.img = null
  }

  render() {
    const { className, src } = this.props
    const { width, height } = this.getDimensions()
    return (
      <img
        alt={src.replace('-', ' ').replace('.jpg', '')}
        className={`${className || ''} ${style}`}
        src={src}
        width={width}
        height={height}
      />
    )
  }
}
