import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function LaurusIdentityPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Laurus</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Laurus Identity 1" src="laurus-identity-1.jpg" />
        <WorkImage alt="Laurus Identity 2" src="laurus-identity-2.jpg" />
        <WorkImage
          alt="Laurus Identity 3"
          src="laurus-identity-3.jpg"
          height={1195}
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('laurus', ['branding', 'identity']),
      label: 'Laurus Brand Identity',
      tileSize: 'md',
    },
  }
}

export default LaurusIdentityPage
