import { InferGetStaticPropsType } from 'next'
import { StradaBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function SummersCornerJournalPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Summers Corner</h1>
      <h2 className={styles.h2}>Root Journal V1</h2>
      <StradaBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage
          alt="Summers Corner Journal 1"
          src="summers-corner-journal-1.jpg"
        />
        <WorkImage
          alt="Summers Corner Journal 2"
          src="summers-corner-journal-2.jpg"
        />
        <WorkImage
          alt="Summers Corner Journal 3"
          src="summers-corner-journal-3.jpg"
        />
        <WorkImage
          alt="Summers Corner Journal 4"
          src="summers-corner-journal-4.jpg"
        />
        <WorkImage
          alt="Summers Corner Journal 5"
          src="summers-corner-journal-5.jpg"
        />
      </div>
    </WorkDetail>
  )
}
export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('summers-corner-journal', [
        'ads',
        'branding',
        'printed matter',
      ]),
      label: 'Summers Corner Root Journal V1',
      tileSize: 'sm',
    },
  }
}

export default SummersCornerJournalPage
