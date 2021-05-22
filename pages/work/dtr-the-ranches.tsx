import { InferGetStaticPropsType } from 'next'
import { StradaBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function DTRTheRanchesPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Devil’s Thumb Ranch, The Ranches</h1>
      <h2 className={styles.h2}>Print Collateral</h2>
      <StradaBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage alt="The Ranches Identity 1" src="dtr-the-ranches-1.jpg" />
        <WorkImage alt="The Ranches Identity 2" src="dtr-the-ranches-2.jpg" />
        <WorkImage alt="The Ranches Identity 3" src="dtr-the-ranches-3.jpg" />
        <WorkImage alt="The Ranches Identity 4" src="dtr-the-ranches-4.jpg" />
        <WorkImage alt="The Ranches Identity 5" src="dtr-the-ranches-5.jpg" />
        <WorkImage alt="The Ranches Identity 6" src="dtr-the-ranches-6.jpg" />
        <WorkImage alt="The Ranches Identity 7" src="dtr-the-ranches-7.jpg" />
        <WorkImage alt="The Ranches Identity 8" src="dtr-the-ranches-8.jpg" />
        <WorkImage alt="The Ranches Identity 9" src="dtr-the-ranches-9.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('dtr-the-ranches', [
        'branding',
        'collateral',
        'printed matter',
      ]),
      label: 'Devil’s Thumb Ranch, The Ranches',
      tileSize: 'sm',
    },
  }
}

export default DTRTheRanchesPage
