import { useEffect, useRef } from 'react';

const VISITOR_MAP_SRC =
  'https://mapmyvisitors.com/map.js?cl=ffffff&w=a&t=tt&d=laWWmqmEDfxHZ6U7zLjgUDVj0WwM6GQbyEC1NK1_RhA&cmo=cb3564&cmn=1bd6e0';

function VisitorMap() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mapContainer.current;
    if (!container) return;

    const script = document.createElement('script');
    script.id = 'mapmyvisitors';
    script.src = VISITOR_MAP_SRC;
    script.async = true;
    script.referrerPolicy = 'strict-origin-when-cross-origin';
    container.replaceChildren(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <section className="visitors section-shell split-section" id="visitors">
      <p className="section-kicker">Visitors</p>
      <div className="section-body visitor-copy">
        <h2>Readers around the world</h2>
        <p className="visitor-intro">
          A privacy-conscious, approximate view of where this site is being read.
        </p>
        <div
          className="visitor-map-frame"
          ref={mapContainer}
          aria-label="Approximate visitor locations around the world"
        >
          <noscript>
            Enable JavaScript to view the visitor map.
          </noscript>
        </div>
        <p className="visitor-note">
          Locations are estimated at country or city level and may not be exact.
        </p>
      </div>
    </section>
  );
}

export default VisitorMap;
