import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function JohnHuetPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>John Huet, Photographer</h1>
      <h2 className={styles.h2}>Brand Campaign & Printed Matter</h2>
      <div className={styles.imgs}>
        <WorkImage alt="John Huet Archive 1" src="john-huet-archive-1.jpg" />
        <WorkImage alt="John Huet Archive 2" src="john-huet-archive-2.jpg" />
        <WorkImage alt="John Huet Archive 3" src="john-huet-archive-3.jpg" />
        <WorkImage
          alt="John Huet Promo Book 1"
          src="john-huet-promo-book-1.jpg"
        />
        <WorkImage
          alt="John Huet Promo Book 2"
          src="john-huet-promo-book-2.jpg"
        />
        <WorkImage
          alt="John Huet Promo Book 3"
          src="john-huet-promo-book-3.jpg"
        />
        <WorkImage
          alt="John Huet Promo Book 4"
          src="john-huet-promo-book-4.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('john-huet', [
        'branding',
        'print campaign',
        'printed matter',
      ]),
      label: 'John Huet, Photographer Brand Campaign & Printed Matter',
      tileSize: 'xs',
    },
  }
}

export default JohnHuetPage
