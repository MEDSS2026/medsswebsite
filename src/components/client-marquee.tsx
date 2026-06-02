const clients = [
  { src: '/assets/clients/mepsb.png', alt: 'MEPSB' },
  { src: '/assets/clients/visions.png', alt: 'Visions' },
  { src: '/assets/clients/maxitulin.jpeg', alt: 'Maxitulin' },
  { src: '/assets/clients/tri-mode.png', alt: 'Tri-Mode' },
  { src: '/assets/clients/twc.png', alt: 'TWC' },
  { src: '/assets/clients/century.png', alt: 'Century' },
  { src: '/assets/clients/jj-express.png', alt: 'JJ Express' },
  { src: '/assets/clients/prismma.png', alt: 'Prismma' },
  { src: '/assets/clients/ns.png', alt: 'NS' },
  { src: '/assets/clients/morelux.png', alt: 'Morelux Lighting' },
  { src: '/assets/clients/toll.png', alt: 'Toll' },
  { src: '/assets/clients/vanguards.png', alt: 'The Vanguards Logistics' },
  { src: '/assets/clients/microenergy.png', alt: 'Microenergy' },
  { src: '/assets/clients/bmi.png', alt: 'BMI' },
  { src: '/assets/clients/shield-security.png', alt: 'Shield Security' },
  { src: '/assets/clients/ht-logistics.png', alt: 'HT Logistics' },
];

export function ClientMarquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-label">Trusted by</div>
      <div className="marquee-track-wrap">
        <div className="marquee-track">
          {[...clients, ...clients].map((c, i) => (
            <div className="marquee-item" key={i}>
              <img src={c.src} alt={c.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
