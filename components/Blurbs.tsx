function PowdrBlurb(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props}>Created in partnership with Powdr Corp.</p>
}

function StradaBlurb(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...props}>
      <span>Created in partnership with Strada Advertising, Denver CO</span>
      <a
        className="ml-2 underline"
        href="http://www.stradamade.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        stradamade.com
      </a>
    </p>
  )
}

export { PowdrBlurb, StradaBlurb }
