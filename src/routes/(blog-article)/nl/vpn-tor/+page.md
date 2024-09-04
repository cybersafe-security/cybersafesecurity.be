---
title: Waarom een VPN en Tor gebruiken?
slug: vpn-tor
coverImage: /images/routeur-chiffrage.avif
excerpt: Gebruik een VPN die uw privacy beschermt en u helpt geografische beperkingen te omzeilen.
date: 2024-07-21T21:51:39.473Z
updated: 2024-07-21T21:51:39.473Z
hidden: false
tags:
  - Documentatie
keywords:
  - Privé Netwerk
  - Tor
  - Versleutelde Tunnel
  - VPN
  - Veilige Verbinding
type: default
---

<script>
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
</script>

# Wat is een VPN?

<Callout type="info">

*Een `VPN (Virtual Private Network)` is een dienst die een beveiligde en versleutelde tunnel creëert tussen uw apparaat en een externe server. Wanneer u verbinding maakt met een VPN, worden uw gegevens versleuteld voordat ze over het internet reizen, waardoor uw persoonlijke informatie wordt beschermd tegen onderschepping en ongeautoriseerde toegang.*
<Callout type="info">
Bovendien maskeert een VPN uw echte IP-adres door het te vervangen door dat van de VPN-server, waardoor uw online activiteiten moeilijker te volgen zijn en u geografische beperkingen kunt omzeilen door toegang te krijgen tot inhoud die in uw regio is geblokkeerd. Kortom, een VPN verbetert uw privacy, versterkt de beveiliging van uw verbinding en biedt u meer vrijheid online.
</Callout>

</Callout>

<Callout type="info">

> *`Tor, afkorting van "The Onion Router,"` is een privacy-netwerk ontworpen om internetbrowsen te anonimiseren. Het werkt door uw internetverkeer via een reeks relais of knooppunten te routeren, beheerd door vrijwilligers over de hele wereld. Elk relais decodeert een laag van de versleuteling (zoals de lagen van een ui) om de volgende stap van het pad te onthullen, maar kent noch de oorsprong noch de eindbestemming van uw gegevens.*

</Callout>

![](/images/tor-shema.webp)

<Callout type="success">

> *Dit proces maakt het uiterst moeilijk voor waarnemers om uw online activiteiten naar u te herleiden. `Tor` wordt vaak gebruikt om de privacy van gebruikers te beschermen, censuur te omzeilen en toegang te krijgen tot websites die niet door traditionele zoekmachines worden geïndexeerd. Door Tor te gebruiken, profiteert u van een betere anonimiteit en verbeterde bescherming tegen online volgen.*

</Callout>

### Waarschuwing, het gebruik van een VPN garandeert geen 100% veiligheid
> *Als het gratis is, bent u het product!*

<Callout type="error">

> *In tegenstelling tot wat vaak wordt gedacht, verkopen veel populaire VPN-diensten uw gegevens aan derden, houden ze logboeken bij van uw activiteiten en kunnen ze onder het mom van juridische verzoeken `uw informatie zelfs aan de autoriteiten verstrekken!`*

<Callout type="warning">

> *Let op, we moedigen geen illegale activiteiten aan, of het nu gaat om het gebruik van een VPN of andere anonimiseringsdiensten*

</Callout>
</Callout>

### IP-adreslek

<Callout type="error">

> - *`IPv6-lek` 90% van de VPN-diensten ondersteunt geen IPv6, waardoor uw IPv6-adres (het equivalent van IPv4) lekt.*

<Callout type="info">

*IPv4 gebruikt 32-bits adressen, met ongeveer 4,3 miljard unieke adressen, terwijl IPv6 128-bits adressen gebruikt, wat een vrijwel onbeperkt aantal adressen mogelijk maakt (ongeveer 340 sextiljoen). Deze verandering was nodig vanwege de uitputting van IPv4-adressen, waardoor de voortdurende uitbreiding van internet en de toename van aangesloten apparaten mogelijk werd gemaakt.*

</Callout>

> - *`DNS-lek` sommige VPN's kunnen DNS-verzoeken mogelijk niet correct via de VPN-tunnel omleiden, waardoor DNS-verzoeken rechtstreeks via de DNS-server van uw internetprovider (ISP) gaan. Dit stelt uw browseactiviteiten bloot aan derden en omzeilt de bescherming van de VPN.*
- *`WebRTC-lek` WebRTC stelt browsers in staat om de lokale en openbare IP-adressen van de gebruiker te ontdekken om realtime communicatie te vergemakkelijken. Deze functie kan echter ook uw echte IP-adres onthullen, zelfs wanneer u een VPN gebruikt.*

<Callout type="info">

*WebRTC (Web Real-Time Communication) lekken zijn privacykwetsbaarheden die kunnen optreden wanneer een website het WebRTC-protocol gebruikt om realtime communicatie, zoals audio- of videogesprekken, rechtstreeks in de browser tot stand te brengen.*

</Callout>
<Callout type="warning">
U moet dit netwerkprotocol uitschakelen als u het niet gebruikt!
</Callout>

> - *`Kill Switch` de meeste VPN's bieden geen Kill Switch aan.*

<Callout type="info">

*Het is een extra bescherming die automatisch uw internetverbinding onderbreekt (op het niveau van de firewall) als de VPN de verbinding met de server verbreekt of een probleem ondervindt!*

</Callout>

</Callout>

<Callout type="success">

*Maak je geen zorgen: elk `CyberSafe Security`-apparaat is zorgvuldig geconfigureerd om datalekken te voorkomen en maximale beveiliging te garanderen. We implementeren rigoureuze maatregelen om uw privacy te beschermen en volledig anoniem browsen te garanderen. Dankzij onze geavanceerde configuraties kunt u met een gerust hart surfen, wetende dat uw persoonlijke informatie beschermd blijft tegen elke vorm van compromittering.*

</Callout>


## Welke VPN moet je dan kiezen?

<Callout type="info">

> *De beste manieren om veilig te surfen en datalekken te vermijden:*
- Host uw eigen VPN op een VPS (virtuele privéserver), waardoor u volledige controle heeft over activiteitslogboeken, die versleuteld blijven en alleen door u toegankelijk zijn.
- Gebruik Tor-relays.
- Gebruik betrouwbare VPN's die geen logboeken bijhouden en uw informatie niet aan de autoriteiten verstrekken, in overeenstemming met de wetten van het land.

</Callout>
