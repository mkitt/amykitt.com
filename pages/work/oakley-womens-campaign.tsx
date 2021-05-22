import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function OakleyWomensCampaignPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Oakley</h1>
      <h2 className={styles.h2}>
        Brand Campaign, Perform Beautifully/Athletes
      </h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Oakley Karena"
          src="oakley-womens-campaign-karena.jpg"
          height={1090}
        />
        <WorkImage
          alt="Oakley Katrina"
          src="oakley-womens-campaign-katrina.jpg"
          height={1093}
        />
        <WorkImage
          alt="Oakley Roxy"
          src="oakley-womens-campaign-roxy.jpg"
          height={1096}
        />
        <WorkImage
          alt="Oakley Gretchen"
          src="oakley-womens-campaign-gretchen.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('oakley-womens-campaign', [
        'ads',
        'branding',
        'print campaign',
        'printed matter',
      ]),
      label: 'Oakley Brand Campaign, Perform Beautifully/Athletes',
      tileSize: 'xs',
    },
  }
}

export default OakleyWomensCampaignPage
