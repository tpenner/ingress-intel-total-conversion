// ==UserScript==
// @id             iitc-plugin-show-own-portals@tpenner
// @name           iitc: show own portals
// @version        0.1
// @namespace      https://github.com/breunigs/ingress-intel-total-conversion
// @updateURL      https://raw.github.com/breunigs/ingress-intel-total-conversion/gh-pages/plugins/show-own-portals.user.js
// @downloadURL    https://raw.github.com/breunigs/ingress-intel-total-conversion/gh-pages/plugins/show-own-portals.user.js
// @description    Uses the fill color of the portals to denote if the portal is owned by you (captured, resonator, shied)
// @include        http://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// ==/UserScript==

function wrapper() {
// ensure plugin framework is there, even if iitc is not yet loaded
if(typeof window.plugin !== 'function') window.plugin = function() {};


// PLUGIN START ////////////////////////////////////////////////////////


// use own namespace for plugin
window.plugin.showOwnPortals = function() {};


window.plugin.showOwnPortals.portalAdded = function(data) {
  // color the portal if own player_guid is found in either a resonator or capturer  
  // window.portals[pGuid].options.details.resonatorArray.resonators.[0-7].ownerGuid
  // window.portals[pGuid].options.details.captured.capturingPlayerId
  
  // to do: check ownership of shields
    
  
  var d = data.portal.options.details;
  var portal_owned_by_me = false;
  if(getTeam(d) != 0)
  {
    //check if portal has energy
    if(window.getTotalPortalEnergy(d)> 0 && window.getCurrentPortalEnergy(d) < window.getTotalPortalEnergy(d))
    {
      portal_owned_by_me = false;
    }
    //check if portal is captured by me
    if(getPlayerName(d.captured.capturingPlayerId) == PLAYER.nickname)
      {
        portal_owned_by_me = true;
      }
    //check if any resonator is deployed by me
    $.each(d.resonatorArray.resonators, function(ind, reso)
    {
      if(getPlayerName(reso.ownerGuid) == PLAYER.nickname) {
        portal_owned_by_me = true;
      }
    });    
    if(portal_owned_by_me)
    {
      var color = window.COLOR_OWN_PORTAL;
      var fill_opacity = 1;
      var params = {fillColor: color, fillOpacity: fill_opacity, radius: data.portal.options.radius+1};
      data.portal.setStyle(params);
    }
  }
}

var setup =  function() {
  window.addHook('portalAdded', window.plugin.showOwnPortals.portalAdded);
 // window.COLOR_OWN_PORTAL = '#D4A017'; // gold
  window.COLOR_OWN_PORTAL = '#FFF'; // white
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
