const YachtDescription = () => {
  return (
    <section id="popis" className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-8">
        <div className="mb-8 text-center">
          <p className="mb-2 font-body text-sm uppercase tracking-[0.25em] text-primary">
            DESCRIPTION
          </p>
          <h2 className="font-display text-4xl font-medium text-foreground">
            BARON TRENK
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-primary" />
        </div>

        <div className="space-y-6 font-body text-base leading-relaxed text-secondary-foreground">
          <p className="text-lg font-medium text-foreground">
            The 43.5-metre BARON TRENK is a striking explorer superyacht built by the renowned Italian shipyard Eurocraft. Designed for owners who seek both adventure and sophistication, she perfectly balances robust engineering with the elegance and comfort expected from a modern superyacht.
          </p>
          <p>
            Constructed with a steel hull and aluminium superstructure, BARON TRENK offers excellent seaworthiness, stability and long-range cruising capability. Her distinctive profile, highlighted by a powerful bow and purposeful explorer styling, reflects a yacht designed to confidently cross oceans while maintaining exceptional comfort on board.
          </p>
          <p>
            Powered by twin MTU diesel engines, she cruises comfortably at 10–12 knots and reaches a maximum speed of 14 knots. Thanks to her efficient fuel consumption and large fuel capacity, she offers an impressive range of over 11,600 nautical miles, making her perfectly suited for long-distance cruising and exploration of remote destinations.
          </p>

          <h3 className="pt-4 font-display text-2xl font-medium text-foreground">
            Elegant accommodation for 10 guests
          </h3>
          <p>
            BARON TRENK offers luxurious accommodation for up to 10 guests in five beautifully appointed staterooms.
          </p>
          <p>
            The impressive full-beam Master Suite is located on the main deck and benefits from large oval windows offering stunning ocean views. The suite also features a private office, spacious walk-in wardrobe and separate his-and-hers bathrooms, creating an exceptional private retreat for the owner.
          </p>
          <p>
            The lower deck hosts a generous full-beam VIP suite, one double cabin and one twin cabin. An additional guest cabin located on the bridge deck can also be used as a massage or wellness treatment room, offering additional flexibility for guests.
          </p>
          <p>
            Accommodation for up to nine crew members ensures seamless service and a relaxed luxury experience on board.
          </p>

          <h3 className="pt-4 font-display text-2xl font-medium text-foreground">
            Designed for comfort and entertaining
          </h3>
          <p>
            BARON TRENK offers a variety of inviting spaces designed for relaxation and socialising. Guests can enjoy the deck jacuzzi with panoramic sea views, spacious exterior decks ideal for alfresco dining, and multiple lounge areas perfect for entertaining or unwinding after a day on the water.
          </p>
          <p>
            Modern onboard amenities include Wi-Fi connectivity, full air-conditioning and stabilizers at anchor, ensuring maximum comfort throughout the journey.
          </p>

          <h3 className="pt-4 font-display text-2xl font-medium text-foreground">
            The ultimate explorer yacht
          </h3>
          <p>
            With her robust construction, exceptional range and generous onboard volume, BARON TRENK is ideally suited for global cruising and luxury island-hopping adventures. Her relatively shallow draft of approximately 3 metres also allows access to secluded bays and anchorages often unreachable by larger yachts.
          </p>
          <p>
            Combining expedition capability with refined luxury, BARON TRENK represents a rare opportunity to own a capable long-range explorer superyacht with timeless appeal and global cruising potential.
          </p>

          <h3 className="pt-4 font-display text-2xl font-medium text-foreground">
            Key Features
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Ice-breaker hull</li>
            <li>Fantastic range: 11,600nm / 10 knots</li>
            <li>Low fuel consumption</li>
            <li>Large exterior spaces</li>
            <li>Zero-speed stabilizers NAIAD</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YachtDescription;
