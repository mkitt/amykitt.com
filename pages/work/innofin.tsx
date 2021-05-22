import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function InnofinPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Innofin</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Innofin Identity 1" src="innofin-identity-1.jpg" />
        <WorkImage
          alt="Innofin Identity 2"
          src="innofin-identity-2.jpg"
          height={1195}
        />
        <WorkImage alt="Innofin Identity 3" src="innofin-identity-3.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('innofin', ['branding', 'identity']),
      label: 'Innofin Brand Identity',
      tileSize: 'xs',
    },
  }
}

export default InnofinPage
