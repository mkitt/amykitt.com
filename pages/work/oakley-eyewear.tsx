import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function OakleyEyewearPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Oakley</h1>
      <h2 className={styles.h2}>
        Rx Campaign, Perform Beautifully/Kate Vogelle
      </h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Oakley Kate Vogelle 1"
          src="oakley-eyewear-kate-1.jpg"
          height={1078}
        />
        <WorkImage
          alt="Oakley Kate Vogelle 2"
          src="oakley-eyewear-kate-2.jpg"
          height={1081}
        />
        <WorkImage
          alt="Oakley Kate Vogelle 3"
          src="oakley-eyewear-kate-3.jpg"
          height={1081}
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('oakley-eyewear', [
        'ads',
        'branding',
        'print campaign',
        'printed matter',
      ]),
      label: 'Oakley Rx Campaign, Perform Beautifully/Kate Vogelle',
      tileSize: 'xs',
    },
  }
}

export default OakleyEyewearPage
