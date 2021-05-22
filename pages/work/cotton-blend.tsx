import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function CottonBlendPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Cotton Blend</h1>
      <h2 className={styles.h2}>A T-shirt Art Show</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Cotton Blend 1" src="cotton-blend-1.jpg" />
        <WorkImage alt="Cotton Blend 2" src="cotton-blend-2.jpg" />
        <WorkImage alt="Cotton Blend 4" src="cotton-blend-4.jpg" />
        <WorkImage alt="Cotton Blend 5" src="cotton-blend-5.jpg" />
        <WorkImage
          alt="Cotton Blend 6"
          src="cotton-blend-6.jpg"
          height={1040}
        />
        <WorkImage
          alt="Cotton Blend 7"
          src="cotton-blend-7.jpg"
          height={1036}
        />
        <WorkImage
          alt="Cotton Blend 8"
          src="cotton-blend-8.jpg"
          height={1027}
        />
        <WorkImage
          alt="Cotton Blend 9"
          src="cotton-blend-9.jpg"
          height={1085}
        />
        <WorkImage
          alt="Cotton Blend 10"
          src="cotton-blend-10.jpg"
          height={1064}
        />
      </div>
      <p className={styles.p}>
        Cotton Blend is a limited edition t-shirt art show. Proceeds from the
        show are donated to DAVA.org, a non-profit in Denver, CO that provides
        after school and summer art classes and mentorships for kids, most of
        whom no longer have art in their schools. The show has currently run 2
        years in a row raising over \$5k for the organization.
      </p>

      <p className={styles.p}>
        Participants in past years include: Aaron Ray, Anthony Cozzi, Anthony
        Dimitre, Berger & Fohr, CacheFlowe, Chris Nguyen, Cast Iron Design,
        Debbie Clapper / gneural, Elliott Hasse, Emily Philpott/Gorilla, Elysia
        Syriac, Evan Huwa, Garrett Deheer, Geoff Allen / FUN is OK, Geoffrey
        Thomas/Guiceworks, Greg Ryan, Jeff Euteneuer, Jeff Keil, Jonathon
        Alsobrook, Jorge Lamora, Justin Fuller / goodappl.es, Kris Fry, Lisa
        Wright / Obsesso Processo, no bones left Elsa Carenbauer, Pedro
        Saldarriaga, Sean Herman, Sean Klassen
      </p>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('cotton-blend', ['art', 'branding']),
      label: 'Cotton Blend A T-Shirt Art Show',
      tileSize: 'sm',
    },
  }
}

export default CottonBlendPage
