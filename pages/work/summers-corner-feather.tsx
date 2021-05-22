import { InferGetStaticPropsType } from 'next'
import { StradaBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function SummersCornerFeatherPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Summers Corner</h1>
      <h2 className={styles.h2}>Brand Campaign</h2>
      <StradaBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage
          alt="Summers Corner Feather Spread 1"
          src="summers-corner-feather-spread-1.jpg"
        />
        <WorkImage
          alt="Summers Corner Feather Spread 2"
          src="summers-corner-feather-spread-2.jpg"
        />
        <WorkImage
          alt="Summers Corner Feather Spread 3"
          src="summers-corner-feather-spread-3.jpg"
        />
        <WorkImage
          alt="Summers Corner Herb Lady Spread"
          src="summers-corner-feather-herb-lady-spread.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('summers-corner-feather', [
        'ads',
        'branding',
        'printed matter',
      ]),
      label: 'Summers Corner Brand Campaign',
      tileSize: 'md',
    },
  }
}

export default SummersCornerFeatherPage
