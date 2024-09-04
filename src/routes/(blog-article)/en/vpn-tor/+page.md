---
title: Why use a VPN and Tor?
slug: vpn-tor
coverImage: /images/routeur-chiffrage.avif
excerpt: Use a VPN that protects your privacy and helps you bypass geographical restrictions.
date: 2024-07-21T21:51:39.473Z
updated: 2024-07-21T21:51:39.473Z
hidden: false
tags:
  - Documentation
keywords:
  - Private Network
  - Tor
  - Encrypted Tunnel
  - VPN
  - Secure Connection
type: default
---

<script>
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
</script>

# What is a VPN?

<Callout type="info">

*A `VPN (Virtual Private Network)` is a service that creates a secure and encrypted tunnel between your device and a remote server. When you connect to a VPN, your data is encrypted before traveling on the internet, protecting your personal information from interception and unauthorized access.*
<Callout type="info">
Additionally, a VPN masks your real IP address by replacing it with that of the VPN server, making your online activity more difficult to track and allowing you to bypass geographical restrictions by accessing content blocked in your region. In summary, a VPN enhances your privacy, strengthens your connection security, and offers greater online freedom.
</Callout>

</Callout>

<Callout type="info">

> *`Tor, short for "The Onion Router,"` is a privacy network designed to anonymize internet browsing. It works by routing your internet traffic through a series of relays or nodes, managed by volunteers around the world. Each relay decrypts one layer of encryption (like the layers of an onion) to reveal the next step of the path but knows neither the origin nor the final destination of your data.*

</Callout>

![](/images/tor-shema.webp)

<Callout type="success">

> *This process makes it extremely difficult for observers to trace your online activity back to you. `Tor` is often used to protect user privacy, bypass censorship, and access websites not indexed by traditional search engines. By using Tor, you benefit from better anonymity and enhanced protection against online tracking.*

</Callout>

### Warning, using a VPN does not guarantee 100% security
> *If it's free, you are the product!*

<Callout type="error">

> *Contrary to popular belief, many mainstream VPN services sell your data to third parties, keep logs of your activities, and under the pretext of legal requests, `may even disclose your information to authorities!`*

<Callout type="warning">

> *Be aware, we do not encourage any illegal activity, whether using a VPN or other anonymization services*

</Callout>
</Callout>

### IP Address Leak

<Callout type="error">

> - *`IPv6 Leak` 90% of VPN services do not support IPv6, causing your IPv6 address (the equivalent of IPv4) to leak.*

<Callout type="info">

*IPv4 uses 32-bit addresses, offering about 4.3 billion unique addresses, while IPv6 uses 128-bit addresses, allowing for an almost unlimited number of addresses (about 340 sextillion). This change was necessary due to the exhaustion of IPv4 addresses, supporting the continued expansion of the Internet and the increase in connected devices.*

</Callout>

> - *`DNS Leak` some VPNs may not properly route DNS requests through the VPN tunnel, allowing DNS requests to go directly through your Internet Service Provider's (ISP) DNS server. This exposes your browsing activities to third parties, bypassing the VPN's protection.*
- *`WebRTC Leak` WebRTC allows browsers to discover the user's local and public IP addresses to facilitate real-time communications. However, this feature can also reveal your real IP address, even when using a VPN.*

<Callout type="info">

*WebRTC (Web Real-Time Communication) leaks are privacy flaws that can occur when a website uses the WebRTC protocol to establish real-time communications, such as audio or video calls, directly in the browser.*

</Callout>
<Callout type="warning">
You must disable this network protocol if you do not use it!
</Callout>

> - *`Kill Switch` most VPNs do not offer a Kill Switch.*

<Callout type="info">

*It is an additional protection that automatically interrupts your internet connection (at the firewall level) if the VPN disconnects from the server or encounters a problem!*

</Callout>

</Callout>

<Callout type="success">

*Do not worry: each `CyberSafe Security` device is carefully configured to prevent data leaks and ensure maximum security. We implement rigorous measures to protect your privacy and ensure completely anonymous browsing. Thanks to our advanced configurations, you can surf with peace of mind, knowing that your personal information remains protected against any form of compromise.*

</Callout>


## Which VPN to choose then?

<Callout type="info">

> *The best ways to browse safely while avoiding data leaks:*
- Host your own VPN on a VPS (virtual private server), which allows you to maintain full control over activity logs, which will remain encrypted and accessible only by you.
- Use Tor relays.
- Use reliable VPNs that guarantee no log keeping and no disclosure of your information to authorities, in compliance with the laws of the country.

</Callout>
