import { InferGetStaticPropsType } from 'next'
import { PowdrBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function KokosPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Kokos</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <PowdrBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage alt="Kokos 1" src="kokos-1.jpg" />
        <WorkImage alt="Kokos 2" src="kokos-2.jpg" />
        <WorkImage alt="Kokos 3" src="kokos-3.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('kokos', ['branding', 'identity']),
      label: 'Kokos Brand Identity',
      tileSize: 'sm',
    },
  }
}

export default KokosPage
