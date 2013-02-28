// ==UserScript==
// @id             iitc-plugin-show-own-portals@tpenner
// @name           iitc: show own portals
// @version        0.3.3.3
// @namespace      https://github.com/tpenner/ingress-intel-total-conversion
// @updateURL      https://raw.github.com/tpenner/ingress-intel-total-conversion/gh-pages/plugins/show-own-portals.user.js
// @downloadURL    https://raw.github.com/tpenner/ingress-intel-total-conversion/gh-pages/plugins/show-own-portals.user.js
// @description    Uses the color of the portals to denote if the portal is owned by you (captured, resonator, shield)
// @include        https://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// ==/UserScript==

function wrapper() {
// ensure plugin framework is there, even if iitc is not yet loaded
if(typeof window.plugin !== 'function') window.plugin = function() {};


// PLUGIN START ////////////////////////////////////////////////////////

var SHOW_OWN_PORTALS = {
    color: '#FFF',
    opacity: 1
};

// use own namespace for plugin
window.plugin.showOwnPortals = function() {};

window.plugin.showOwnPortals.portalAdded = function(data) {
  // color the portal if own player_guid is found in either a resonator, shield, or capturer  
  // window.portals[pGuid].options.details.resonatorArray.resonators.[0-7].ownerGuid
  // window.portals[pGuid].options.details.portalV2.linkedModArray[0-3].installingUser
  // window.portals[pGuid].options.details.captured.capturingPlayerId  
    
  var d = data.portal.options.details;
  var portal_owned_by_me = false;
  var myTeam = TEAM_NONE;
  
  if(PLAYER.team === 'RESISTANCE'){
    var myTeam = TEAM_RES;
  } else if(PLAYER.team === 'ENLIGHTENED') {
    var myTeam = TEAM_ENL;
  }

  var portalTeam = getTeam(d);

  if((portalTeam !== 0) && (portalTeam === myTeam)) {
    // check if portal is captured by me
    if(getPlayerName(d.captured.capturingPlayerId) == PLAYER.nickname) {
        portal_owned_by_me = true;
    }
    // check if any resonator is deployed by me
    $.each(d.resonatorArray.resonators, function(ind, reso) {
	  if(reso !== null) {
        if(getPlayerName(reso.ownerGuid) === PLAYER.nickname) {
          portal_owned_by_me = true;
        }
	  }
    });
    // check if any shield is deployed by me
    $.each(d.portalV2.linkedModArray, function(ind, mod) {
	  if(mod !== null) {
        if(getPlayerName(mod.installingUser) === PLAYER.nickname) {
          portal_owned_by_me = true;
        }
      }
    });
    if(portal_owned_by_me) {
      var coord = [d.locationE6.latE6/1E6, d.locationE6.lngE6/1E6];
	  L.circle(coord, 45, { fill: false, color: SHOW_OWN_PORTALS.color, weight: 15, clickable: false }).addTo(map);
    }
  }
}

var setup =  function() {
  window.addHook('portalAdded', window.plugin.showOwnPortals.portalAdded);
}


// PLUGIN END //////////////////////////////////////////////////////////

if(window.iitcLoaded && typeof setup === 'function') {
  setup();
} else {
  if(window.bootPlugins)
    window.bootPlugins.push(setup);
  else
    window.bootPlugins = [setup];
}
} // wrapper end
// inject code into site context
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ wrapper +')();'));
(document.body || document.head || document.documentElement).appendChild(script);