import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function InstagramNYCPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Instagram</h1>
      <h2 className={styles.h2}>Identity & Printed Matter for NYC event</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Instagram NYC Folio 1"
          src="instagram-nyc-folio-1.jpg"
        />
        <WorkImage
          alt="Instagram NYC Folio 2"
          src="instagram-nyc-folio-2.jpg"
        />
        <WorkImage
          alt="Instagram NYC Invite 1"
          src="instagram-nyc-invite-1.jpg"
        />
        <WorkImage
          alt="Instagram NYC Invite 2"
          src="instagram-nyc-invite-2.jpg"
        />
        <WorkImage
          alt="Instagram NYC Lanyard"
          src="instagram-nyc-lanyard.jpg"
        />
        <WorkImage alt="Instagram NYC Menu" src="instagram-nyc-menu.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('instagram-nyc', [
        'branding',
        'collateral',
        'identity',
        'printed matter',
      ]),
      label: 'Instagram Identity & Printed Matter for NYC event',
      tileSize: 'xs',
    },
  }
}

export default InstagramNYCPage
