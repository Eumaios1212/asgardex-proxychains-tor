<div>
<div align=center>
<a href="https://freeimage.host/"><img width="200px" src="https://iili.io/HuKA6eR.png" width="400px"alt="HuKA6eR.png" border="0" /></a>
</div>

<div>
<div align=center>
<h1>Protecting Asgardex from IP Leakage<h1>
</div>

Certain wallets, such as [Monero](https://www.getmonero.org/resources/about/), [Zano](https://docs.zano.org/docs/getting-started) and [Grin](https://grin.mw/) and [Beam](https://documentation.beam.mw/#private-transactions) offer “privacy by default”—whether using the Graphic User Interface (GUI) of the plebs or the Command Line Interface (CLI) of the Patricians. That privacy, however, is often related solely to your transactions: with such “privacy coins,” no one can view the contents of your wallet, even if they happen to know your wallet’s address. [^1]

With public ledger coins such as Bitcoin, one the other hand, one must take additional measures beyond the protocol to preserve similar transactional privacy. It is here where coinjoin projects like Samourai's [Whirlpool](https://samouraiwallet.com/whirlpool) are important.

Few people, however, consider another aspect of privacy: IP privacy. Of the protocols mentioned above, some have gone beyond transactional privacy to also take into account IP privacy, while others haven’t. Monero, Zano, and some Bitcoin wallets such as [Sparrow](https://sparrowwallet.com/docs/mixing-whirlpool.html) (which uses Whirlpool), include feature to prevent IP leakage, while other wallets, such as Beam’s and Thorchain’s [Asgardex](https://github.com/thorchain/asgardex-electron#readme) do not. 

<div>
<div align=center>
<a href="https://freeimage.host/"><img width="100px" src="https://iili.io/HuKERCx.png" alt="HuKERCx.png" border="0" /></a>
<h1>The IP Problem<h1>
</div>

So, as we’ve just mentioned, transactions aren’t the only thing that ought be anonymized. Just recently, in fact, users of Metamask learned this the hard way. [Infura revealed](https://cryptoslate.com/infura-co-founder-metamask-ip-collection-backlash-is-blown-out-of-proportion/) that it was collecting users’ IP addresses! So even if you were diligent enough to acquire non-KYC [^2] Ethereum—thus *thinking* you had successfully preserved your pseudonymity (while surely paying a premium for your ETH)—Infura seems to have sold you out. Although they may not have your name, phone number or street address, as far as the Three Letter Agencies are concerned, they have your identity no less. Ask yourself what Infura will say when Caesar comes looking for your data? Sadly, we all know the answer.

Sure, in many cases one can just avoid connecting a wallet via third parties. Web wallets and remote nodes are notoriously *not* best practice for a reason. However,  even using a desktop wallet connected through one’s own integrated node is insufficient in certain cases. Wallets often have internal applications—applications we often need!— that *require* connecting to third parties. As an example, Beam's [Atomic Swaps](https://beamx.gitbook.io/atomic-swaps-desktop-guide/configuring-atomic-swaps-in-desktop-wallet) with Ethereum require using our fair-weather friends at Infura via Metamask! And although there is no reason to think that Beam has access to, and is storing, IP addresses, we had no reason to think this about Infura either. Though we may implicitly trust Asgardex more than Beam, we should remember that there ought be no trust in this realm, or at least as little as technologically possible.

Must we concede, throwing up our hands? Should we just admit that verified privacy is too hard a goal for which to even aim any more, contrary to the core crypto-ethos? Is it time to just embrace Clown World? 

<div>
<div align=center>
<a href="https://freeimage.host/"><img src="https://iili.io/HuKhmoF.jpg" alt="HuKhmoF.jpg" border="0" /></a>
</div>

No, we must throw down the fuckin’ gauntlet, reminding ourselves of Fox Mulder: ****Trust No One!****

<div>
<div align=center>
<a href="https://freeimage.host/"><img width="200px" src="https://iili.io/Huf8EiB.jpg" alt="Huf8EiB.jpg" border="0" /></a>
</div>

So do VPN providers keep logs of IP addresses? Many, such as Nord, have stated emphatically that they do not; and they have even had third-parties verify their claims. But once again, what will *Perfect Privacy VPN Company* say when Caesar comes knocking with their court order for them to *begin* to track and log IPs? We know their answer:

> However, if a court order were issued according to laws and regulations, if it were legally binding under the jurisdiction that we operate in, and if the court were to reject our appeal, then there would be no other option but to comply [sc. and track IPs]. ****The same applies to all existing VPN companies if they operate legally.**** In fact, the same applies to all companies in the world.              ([NordVPN Blog, their emphasis](https://nordvpn.com/blog/how-nordvpn-protects-the-privacy-of-its-customers/))

Thankfully, there’s a service anyone with a Linux OS can run in order to anonymize himself: [proxychains](https://linuxhint.com/proxychains-tutorial/)—and I truly mean *anyone*. Setting up and running this service takes little more than 15 minutes, and no more skill than opening the terminal! When I discovered how easy this was to use, I honestly couldn’t understand why more people weren’t talking about it. It provides a major, much-needed privacy protection.

<div>
<div align=center>
<h2>The IP Solution<h2>
</div>

So first, what is proxychains? Most generally, one can think of it as putting numerous links between you and your final online destination. If a VPN adds a single intermediary, proxychains adds numerous. 

Imagine something like this, where X, Y and Z are proxies: [^3]

<div>
<div align=center>
YOU→X→Y→Z →DESTINATION→Z→Y→X →YOU
</div>

But these intermediaries merely make following the clear, causal steps in the chain more time-consuming! After all, the links are all still very much there and visible for anyone with the time and energy—and Caesar has *lots* of both.

So although we have surely added privacy, insofar as difficulty increases privacy, we have not fundamentally secured it. Further, the added difficulty of tracking you down has perhaps done little more than piss someone off…

<div>
<div align=center>
<a href="https://freeimage.host/"><img width="300px" src="https://iili.io/HufPuXs.jpg" alt="HufPuXs.jpg" border="0" /></a>
</div>

This is where Tor Service comes in. [^4] Tor obfuscates these otherwise visible (and thus causally traceable) links. Our above example would now look more like this:

<div>
<div align=center>
YOU→X→?<sup>1</sup>→?<sup>2</sup>→DESTINATION →?<sup>3</sup>→?<sup>4</sup>→Q→YOU
</div>

Thus with proxychains (as intermediaries) and Tor Service (as an anonymizer), we can achieve a strong degree of true IP anonymity. [^5] We can launch our wallet without worrying (too much) about IP leaks to third parties. We can ****Trust No One!****

<div>
<div align=center>
<h2>Set-Up<h2>
</div>

So unless you’re running certain privacy-hardened Linux distros like (bad-ass) Kali Linux, which comes with proxychains preinstalled, we must download it.

****Step 1:****[^6]

```
sudo apt proxychains tor -y
```

Next, we need to modify the configuration file. So select the text editor of your choice (I’ll be using Nano).

****Step 2:**** [^7]

```
sudo nano /etc/proxychains.conf
```

OK, plebs like myself who are reading this are probably freaking out looking through this configuration file. Fear not! There are only a few important choices, and then possible changes, that we’ll need to make.

First, observe that we have three main options as to how the proxychain is treated: dynamic, strict and random. It's easiest to explain these starting with “strict.”[^8]

If we select “strict,” the proxies will follow a (surprise!) *strict* order set down by us in the .conf file —and it will make *no* exception to the number and ordering of the proxies. If we know certain proxies, and trust them far more than any others, this is a sensible approach. However, if just *one* goes down, the chain is entirely broken, since the dead proxy will not be skipped over. It’s thus not the most convenient option.

“Dynamic” is basically the same as strict, except that it will skip over any dead proxies—in fact, it will skip over *all* dead proxies and continue working, so long as there is just *one* live proxy. The costs and benefits of this are clear and proportionate.

Finally, there's “random.” With this option, each proxy is selected at random (surprise, again!) from a list. It seems to me that this is the best of the three, since it doesn’t demand a *particular* set of proxies, but also will not potentially run through just one (as is the worst case scenario with dynamic).

Now scroll down to ``random_chain.``

****Step 3:****

Uncomment [^9]:  `random_chain`

In the steps that follow, some configurations may already be properly set. If so, all the better!

**Step 4:**

Uncomment ``Proxy DNS requests – no leak for DNS data``

The above command merely makes possible the following options. ****[is this accurate?]****

**Step 5**

Uncomment ``proxy_dns``

This step hides our DNS requests, thus further preventing location leaks.

(Step 6 is probably already properly configured, but just in case...)

**Step 6:**

Uncomment the following four lines

 ``tcp_read_time_out 15000``

 ``tcp_connect_time_out 8000``

 ``socks4 127.0.0.1 9050``

 ``socks5 127.0.0.1 9050``

The last two set the loopback interface to our local host (127.0.0.1) as well as the default port for Tor Service (9050). If the socks5 line isn’t already there to uncomment, just add it in.

OK, now write (ctr+o) and close (ctr+x) that file. You’re almost done!

<div>
<div align=center>
<a href="https://freeimage.host/"><img width="200px" src="https://iili.io/HufyEsS.png" alt="HufyEsS.png" border="0" /></a>
</div>

In order that we don’t have to restart the Tor Service every time we reboot, we’re going to set it to autostart on boot.

**Step 7:**

```
sudo systemctl enable tor
```

Give it a minute to make sure everything’s copacetic, and then check Tor’s status:

**Step 8:**

```
service tor status
```

It should tell you that it’s “loaded” and “active.” If so, hit ctr+c to close the status check, and let’s give it a test-run with Firefox (or whichever browser you wish)! Open a terminal.

**Step 9:**

```
proxychains firefox
```

**[why is there no ./ used before firefox, as is necessary below with the wallet?]**

Your browser should have opened. Now search for: ****What is my IP?**** If it is different from your actual IP, you’ve done everything right!

We’re ready for the goal of all this: running any wallet which lacks built-in IP protections. I’ll be using Asgardex, as an example, though the adjustments to your wallets should be easy enough.

Go to the directory with your Asgardex wallet application. We’ll be using the latest GUI AppImage, but just substitute whichever wallet app you have. Open a terminal in the directory.

**Step 10**

```
proxychains ./ASGARDEX-1.18.5-linux.AppImage
```

If you’ve followed me to here, your Asgardex wallet is now running through proxychains via Tor Service. To close your wallet, just exit it as usual.

Congrats!!! Your IP is now as safe as any but the most powerful Master Shit-poasting Techlords can achieve. [^10]

<div>
<div align=center>
<a href="https://freeimage.host/"><img width="300px" src="https://iili.io/HuqdqEN.jpg" alt="HuqdqEN.jpg" border="0" /></a>
</div>

If you found this little tutorial playfully helpful, **Monero*** tips are appreciated: 

```
85bbj7Ytydfb2og4QT1mvu2ZFdo56bAC5GVxrmQtSWau3TLSyEmTboXauenRxnerodKimH1txtAwzBy17oQ35sZATL7YVNZ
```

<div>
<div align=center>
<a href="https://freeimage.host/"><img width="400px" src="https://iili.io/Huqne8Q.png" alt="Huqne8Q.png" border="0" /></a>
</div>

[^1]: As a side, those of us in the privacy-loving community ought ardently push back against this terminology: Monero, Zano, Firo, Dero and Beam, etc., aren’t “privacy” coins; Bitcoin, Ethereum, etc., are transparency. No one refers to US dollars as “privacy” dollars. Privacy is the monetary, default standard—it is the protocoals with a public ledger that are doing something non-standard. And this does not even touch on the ways the terminology of “privacy coin” is used rhetorically by State Actors to wage a war on privacy. Will we soon have not only bedrooms, but also privacy bedrooms?

[^2]: Know Your Customer, i.e., KYC exchanges such as Coinbase or Binance require you to provide personal, identification, in contrast to, say, Bisq, Kucoin or Thorchain which are all quite different types of non-KYC exchanges, i.e., exchanges that don't require any personal information (except, maybe an email for verification, though, of course, that need not be connected to you).

[^3]: You can also randomize the intermediary proxies, but that would change little from a privacy standpoint.

[^4]: Remember, this is not the Tor Browser, but rather Tor Service. You will need to either start it each time you reboot your PC, or, as we will do, add it to your Startup services.

[^5]: Note, when dealing with state actors, there are never any perfect guarantees—one ought always keep this in mind!

[^6]: The -y flag merely eliminates the further need to confirm your command—it just runs it.

[^7]: If this happens to not be the location of proxychains on your PC, simple enter the following command, and substitute the address found: `locate proxychains`

[^8]: I encourage you to also read through the .conf file itself—it’s actually fairly intelligible!

[^9]: I.e., delete the # at the start of the line.

[^10]: As a final, additional superuser trick, switch out your proxified, torified IP address every now and then by entering: ``sudo service tor restart``.


