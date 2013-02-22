**WEBSITE LOOKS BROKEN?** Update the script. On the upside you may scroll the portal details if there’s not enough screen space.



ingress.com/intel total conversion
==================================

It’s annoying to extend the intel page with new features because the minified code makes it hard to grasp what’s going on. Also, one has to play catch up each time Niantic put up a new version because all the variables might get new names.

So instead, here’s a userscript that starts from scratch:


[![Screenshot of the total conversion in Johannesburg](http://breunigs.github.com/ingress-intel-total-conversion/screenshots/screen_small.png)](http://breunigs.github.com/ingress-intel-total-conversion/screenshots/screen.png)

(click to zoom)

Features
--------

- feels faster. (Likely because [leaflet](http://leafletjs.com/) is faster, although there are some other tricks.)
- full view of portal images
- better chat
  - separated full/compact/public/faction
  - compact only shows the last automated message for each user. Makes a great “where are they now” guide.
  - nick tab completion
  - clickable links
- automatic idle resume
- portal details get updated while portal is visible on map
- links to portals made easy (partly works with the vanilla map, too)
- info porn. Everything with the help cursor has more info hidden in a tooltip.
- may toggle portals/links/fields
- hack range (yellow circle) and link range (large red circle) for portals. Click on the range link in the sidebar to zoom to link range.
- double clicking a portal zooms in and focuses it
- display of XM and AP rewards for redeemed passcodes
- [extend it even more with the use of plugins](https://github.com/breunigs/ingress-intel-total-conversion/tree/gh-pages/plugins)


Install
-------

Current version is 0.61. See [NEWS.md](https://github.com/breunigs/ingress-intel-total-conversion/blob/gh-pages/NEWS.md) for details. **THIS VERSION CONTAINS A SECURITY UPDATE.** Please update as soon as possible and also alert friends about it.

[**INSTALL**](https://raw.github.com/breunigs/ingress-intel-total-conversion/gh-pages/dist/total-conversion-build.user.js)


**Firefox:** Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [Scriptish](https://addons.mozilla.org/en-US/firefox/addon/scriptish/). Click install link. Install. Reload page.


**Chrome:**
- Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/details).
- Click install link.
- **Now beware:** a OK/cancel dialog pops up. It **does not** allow you to cancel the installation. Choose **OK** to install the script with Tampermonkey.
- Confirm once again and you’re done.

**Note:** Tampermonkey is optional. However, it offers auto-update, shows correct version numbers and installing user scripts is much easier. If you have installed the scripts directly into Chrome before, I recommend you switch to Tampermonkey. Uninstall the old scripts and reinstall them.



**Opera:** Download the script and put it into your user_js folder (that’s `~/.opera/user_js` on Unix). If you can’t find it [see Opera’s docs](http://www.opera.com/docs/userjs/using/#writingscripts). After placing it there, reload the page.

**NoScript:** The newest, not yet released version appears to work with NoScript. Until it is released disable NoScript if you have problems. To make the script work whitelist at least these domains: `ingress.com` `github.com` `leafletjs.com` `googleapis.com`. If you want to see the cool font also whitelist `googleusercontent.com`.



[**INSTALL**](https://raw.github.com/breunigs/ingress-intel-total-conversion/gh-pages/dist/total-conversion-build.user.js)

Reporting Issues
----------------

[tutorial / guide / please read / **free candy**](https://github.com/breunigs/ingress-intel-total-conversion/blob/gh-pages/HACKING.md#how-do-i-report-bugs)


Contributing
------------

Please do!

(Obviously, Resistance folks must send in complete patches while Enlightenment gals and guys may just open feature request ☺). If you want to hack the source, please [read HACKING.md for details](https://github.com/breunigs/ingress-intel-total-conversion/blob/gh-pages/HACKING.md) .

**So far, these people have contributed:**

[Bananeweizen](https://github.com/Bananeweizen),
[cmrn](https://github.com/cmrn),
[epf](https://github.com/epf),
[integ3r](https://github.com/integ3r),
[JasonMillward](https://github.com/JasonMillward),
[jonatkins](https://github.com/jonatkins),
[mledoze](https://github.com/mledoze),
[OshiHidra](https://github.com/OshiHidra),
[phoenixsong6](https://github.com/phoenixsong6),
[Pirozek](https://github.com/Pirozek),
[saithis](https://github.com/saithis),
[Scrool](https://github.com/Scrool),
[sorgo](https://github.com/sorgo),
[tpenner](https://github.com/tpenner),
[vita10gy](https://github.com/vita10gy),
[Xelio](https://github.com/Xelio),
[ZauberNerd](https://github.com/ZauberNerd)


Attribution & License
---------------------

This project is licensed under the permissive ISC license. Parts imported from other projects remain under their respective licenses:

- [autolink-js by Bryan Woods; MIT](https://github.com/bryanwoods/autolink-js)
- [load.js by Chris O'Hara; MIT](https://github.com/chriso/load.js)
- [leaflet.js; custom license (but appears free)](http://leafletjs.com/)
- [leaflet.draw.js; by jacobtoye; MIT](https://github.com/Leaflet/Leaflet.draw)
- [`leaflet_google.js` by Pavel Shramov; same as Leaftlet](https://github.com/shramov/leaflet-plugins) (modified, though)
- StackOverflow-CopyPasta is attributed in the source; [CC-Wiki](https://creativecommons.org/licenses/by-sa/3.0/)
- all Ingress/Niantic related stuff obviously remains non-free and is still copyrighted by Niantic/Google
