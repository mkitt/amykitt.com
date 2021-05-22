import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function TheBarreStandardPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>The Barre Standard</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="The Barre Standard Identity 1"
          src="the-barre-standard-identity-1.jpg"
        />
        <WorkImage
          alt="The Barre Standard Identity 2"
          src="the-barre-standard-identity-2.jpg"
        />
        <WorkImage
          alt="The Barre Standard Identity 3"
          src="the-barre-standard-identity-3.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('the-barre-standard', ['branding', 'identity']),
      label: 'The Barre Standard Brand Identity',
      tileSize: 'sm',
    },
  }
}

export default TheBarreStandardPage
