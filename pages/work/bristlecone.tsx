import { InferGetStaticPropsType } from 'next'
import { PowdrBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function BristleconePage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Bristlecone at Lee Canyon Ski Area</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <PowdrBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage
          alt="Bristlecone Identity 1"
          src="bristlecone-identity-1.jpg"
        />
        <WorkImage
          alt="Bristlecone Identity 2"
          src="bristlecone-identity-2.jpg"
        />
        <WorkImage
          alt="Bristlecone Identity 3"
          src="bristlecone-identity-3.jpg"
        />
        <WorkImage
          alt="Bristlecone Identity 4"
          src="bristlecone-identity-4.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('bristlecone', ['branding', 'identity']),
      label: 'Bristlecone Brand Identity',
      tileSize: 'xs',
    },
  }
}

export default BristleconePage
