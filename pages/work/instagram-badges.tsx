import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function InstagramBadgesPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Instagram</h1>
      <h2 className={styles.h2}>Printed Matter</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Instagram Badges"
          src="instagram-badges-openbook-folio.jpg"
        />
        <WorkImage
          alt="Instagram Fall Brochure 1"
          src="instagram-badges-brochure-fall-1.jpg"
        />
        <WorkImage
          alt="Instagram Fall Brochure 2"
          src="instagram-badges-brochure-fall-2.jpg"
        />
        <WorkImage
          alt="Instagram Fall Brochure 3"
          src="instagram-badges-brochure-fall-3.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('instagram-badges', [
        'branding',
        'collateral',
        'printed matter',
      ]),
      label: 'Instagram Badges',
      tileSize: 'sm',
    },
  }
}

export default InstagramBadgesPage
