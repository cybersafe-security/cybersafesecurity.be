---
title: Pourquoi utiliser un VPN et Tor?
slug: vpn-tor
coverImage: /images/routeur-chiffrage.avif
excerpt: Utiliser un VPN qui protège votre vie privée et vous aide à contourner les restrictions géographiques.
date: 2024-07-21T21:51:39.473Z
updated: 2024-07-21T21:51:39.473Z
hidden: false
tags:
  - Documentation
keywords:
  - Réseau Privée
  - Tor
  - Tunnel Chiffrée
  - VPN
  - Connexion Sécurisé
type: default
---

<script>
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
</script>

# C'est quoi un VPN?

<Callout type="info">

 *Un `VPN (Virtual Private Network)` est un service qui crée un tunnel sécurisé et crypté entre votre appareil et un serveur distant. Lorsque vous vous connectez à un VPN, vos données sont chiffrées avant de voyager sur internet, ce qui protège vos informations personnelles contre les interceptions et les accès non autorisés.*
<Callout type="info">
De plus, un VPN masque votre adresse IP réelle en la remplaçant par celle du serveur VPN, ce qui rend votre activité en ligne plus difficile à suivre et permet de contourner les restrictions géographiques en accédant à du contenu bloqué dans votre région. En somme, un VPN améliore votre confidentialité, renforce la sécurité de votre connexion et vous offre une plus grande liberté en ligne
</Callout>

</Callout>

<Callout type="info">

> *`Tor, acronyme de "The Onion Router,"` est un réseau de confidentialité conçu pour anonymiser la navigation sur internet. Il fonctionne en acheminant votre trafic internet à travers une série de relais ou de nœuds, gérés par des bénévoles à travers le monde. Chaque relais déchiffre une couche d'encryption (comme les couches d'un oignon) pour révéler l'étape suivante du chemin, mais ne connaît ni l'origine ni la destination finale de vos données.*

</Callout>

![](/images/tor-shema.webp)

<Callout type="success">

> *Ce processus rend extrêmement difficile pour les observateurs de tracer votre activité en ligne jusqu'à vous. `Tor` est souvent utilisé pour protéger la confidentialité des utilisateurs, contourner la censure, et accéder à des sites web qui ne sont pas indexés par les moteurs de recherche traditionnels. En utilisant Tor, vous bénéficiez d'une meilleure anonymité et d'une protection renforcée contre le suivi en ligne.*

</Callout>

### Attention, utiliser un VPN ne garantit pas une sécurité à 100%
> *Si c'est gratuit vous êtes le produit!*

<Callout type="error">

> *Contrairement aux idées reçues, de nombreux services VPN grand public revendent vos données à des tiers, conservent des journaux de vos activités et, sous prétexte de demandes judiciaires, `peuvent même divulguer vos informations aux autorités!`*

<Callout type="warning">

> *Attention, nous n'encourageons aucun acte illégal, que ce soit avec l'utilisation d'un VPN ou d'autres services d'anonymisation*

</Callout>
</Callout>

### Fuite d'addresse IP

<Callout type="error">

> - *`Fuite IPv6` 90% des services VPN ne supporte pas l'IPv6, ce qui fais fuité votre addresse IPv6 (l'équivalent de l'IPv4)*

<Callout type="info">

*L'IPv4 utilise des adresses de 32 bits, offrant environ 4,3 milliards d'adresses uniques, tandis que l'IPv6 utilise des adresses de 128 bits, permettant un nombre quasi illimité d'adresses (environ 340 sextillions). Ce changement a été nécessaire en raison de l'épuisement des adresses IPv4, permettant ainsi de soutenir l'expansion continue d'Internet et l'augmentation des dispositifs connectés*

</Callout>

> - *`Fuite DNS` certains VPN peuvent ne pas rediriger correctement les requêtes DNS à travers le tunnel VPN, laissant ainsi les requêtes DNS passer directement par le serveur DNS de votre fournisseur d'accès Internet (FAI). Cela expose vos activités de navigation à des tiers, contournant la protection du VPN*
- *`Fuite WebRTC` WebRTC permet aux navigateurs de découvrir les adresses IP locales et publiques de l'utilisateur pour faciliter les communications en temps réel. Cependant, cette fonctionnalité peut également révéler votre adresse IP réelle, même lorsque vous utilisez un VPN*

<Callout type="info">

*Les fuites WebRTC (Web Real-Time Communication) sont des failles de confidentialité qui peuvent survenir lorsqu'un site web utilise le protocole WebRTC pour établir des communications en temps réel, telles que les appels audio ou vidéo, directement dans le navigateur*

</Callout>
<Callout type="warning">
Vous devez désactiver ce protocole réseau si vous ne l'utilisez pas !
</Callout>

> - *`Kill Switch` la plupart des VPN ne propose pas de Kill Switch*

<Callout type="info">

*Il s'agit d'une protection supplémentaire qui interrompt automatiquement votre connexion Internet (au niveau du pare-feu) si le VPN se déconnecte du serveur ou rencontre un problème!*

</Callout>

</Callout>

<Callout type="success">

*N'ayez aucune crainte : chaque appareil `CyberSafe Security` est soigneusement configuré pour éviter les fuites de données et garantir une sécurité maximale. Nous mettons en place des mesures rigoureuses pour protéger votre confidentialité et assurer une navigation complètement anonyme. Grâce à nos configurations avancées, vous pouvez surfer en toute sérénité, en étant assuré que vos informations personnelles restent protégées contre toute forme de compromission*

</Callout>


## Quel VPN choisir alors?

<Callout type="info">

> *Les meilleurs moyens pour naviguez en toute sécurité tout en évitant des fuites de données: *
- Hébergez votre propre VPN sur un VPS (serveur privé virtuel), ce qui vous permet de garder un contrôle total sur les journaux d'activité, qui resteront chiffrés et accessibles uniquement par vous
- Utilisé des relais Tor
- Utilisez des VPN fiables qui garantissent l'absence de sauvegarde des journaux de connexion et la non-divulgation de vos informations aux autorités, conformément aux lois en vigueur dans le pays

</Callout>



