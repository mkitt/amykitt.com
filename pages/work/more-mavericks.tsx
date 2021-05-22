import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function MoreMavericksPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>More Mavericks</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="More Mavericks Identity 1"
          src="more-mavericks-identity-1.jpg"
        />
        <WorkImage
          alt="More Mavericks Identity 2"
          src="more-mavericks-identity-2.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('more-mavericks', ['branding', 'identity']),
      label: 'More Mavericks Brand Identity',
      tileSize: 'sm',
    },
  }
}

export default MoreMavericksPage
