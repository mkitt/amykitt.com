import { InferGetStaticPropsType } from 'next'
import { StradaBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function CornerHouseCafePage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Corner House Cafe</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <StradaBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage
          alt="Corner House Cafe 1"
          src="corner-house-identity-1.jpg"
        />
        <WorkImage
          alt="Corner House Cafe 2"
          src="corner-house-identity-2.jpg"
        />
        <WorkImage
          alt="Corner House Cafe 3"
          src="corner-house-identity-3.jpg"
        />
        <WorkImage
          alt="Corner House Cafe 4"
          src="corner-house-identity-4.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('corner-house-cafe', ['branding', 'identity']),
      label: 'Corner House Cafe Brand Identity',
      tileSize: 'sm',
    },
  }
}

export default CornerHouseCafePage
