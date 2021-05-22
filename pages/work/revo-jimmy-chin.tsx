import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function RevoJimmyChinPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Revo</h1>
      <h2 className={styles.h2}>Brand Campaign, Jimmy Chin</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Revo Jimmy Chin 1" src="revo-jimmy-chin-1.jpg" />
        <WorkImage alt="Revo Jimmy Chin 2" src="revo-jimmy-chin-2.jpg" />
        <WorkImage alt="Revo Jimmy Chin 3" src="revo-jimmy-chin-3.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('revo-jimmy-chin', [
        'branding',
        'identity',
        'print campaign',
        'printed matter',
      ]),
      label: 'Revo Jimmy Chin Brand Campaign',
      tileSize: 'sm',
    },
  }
}

export default RevoJimmyChinPage
