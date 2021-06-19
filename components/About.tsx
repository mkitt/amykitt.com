function About() {
  return (
    <article className="flex flex-col relative text-prime-1 md:flex-row">
      <div className="md:order-2 md:ml-4">
        <h1 className="text-lg uppercase font-bold">Amy Kitt</h1>
        <p className="my-4 text-sm">
          hello. I am a freelance designer with a focus on branding + identity.
        </p>
        <p className="my-4 text-sm">
          From concept to build-out, or stepping into a project in the middle, I
          enjoy collaboration with agencies, small design shops, organizations
          and independent companies/individuals. I mostly park my laptop in
          Denver, CO. When I’m not designing I snowboard, snowshoe, x-country
          ski, do yoga and wog (jog very slowly).
        </p>
        <h2 className="uppercase font-bold">Discipline Strengths</h2>
        <ul className="my-4 text-sm">
          <li>icon + symbol design</li>
          <li>branding/visual design language</li>
          <li>print + collateral design</li>
          <li>interactive</li>
        </ul>
        <h2 className="uppercase font-bold">Brand Highlights</h2>
        <p className="my-4 text-sm">
          Aspen/Snowmass, Audi of America, Backyard Soda Co., Boa Technology,
          Brine Lacrosse, Burton Snowboards, Callaway Golf, Copper Mountain,
          Devil’s Thumb Ranch, Eagle Creek, Gregory Packs, Instagram, John Huet
          Photography, Lee Canyon Resort, MCA Denver, Muse Studio, The North
          Face, Oakley, POWDR Co., Pressery, Red Camper, Revo, Scarpa,
          Smartwool, Vail Resorts, Vans, Westword, Winter Park/Mary Jane
        </p>
      </div>
      <div className="min-w-30 min-h-60 mb-1 md:order-1 md:min-w-60 md:min-h-120">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Amy Kitt"
          src="/assets/amy-kitt-dual.jpg"
          width={512}
          height={1030}
        />
      </div>
    </article>
  )
}

export default About
