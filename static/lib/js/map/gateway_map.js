(function() {

    function get_icon(gateway) {
        if (gateway.status == 1)
            return window._icon.gateway_offline;
        if (gateway.status == 2)
            return window._icon.gateway_planned;
        return window._icon.gateway;
    }

    function draw_this_gateway(gateway) {
		console.log("gateway: "+gateway);
        var marker = new PruneCluster.Marker(gateway.lat, gateway.lon);

        marker.data.icon = get_icon(gateway);
		if (gateway.picture == "" || gateway.picture == undefined) {
			gateway.pciture = "/static/img/no-profile.png";
		}
        	marker.data.popup = '<img src="' + gateway.picture + '" alt="Profile" height="50" width="50"><br>';
		marker.data.popup += '<b>ULAPPH</b>: <a href="' + gateway.title + 'website?q=home" target=website title=Website>' + gateway.title + '</a><br>';

        if (gateway.username) {
			//for robots
			var res = gateway.username;
			var n = res.indexOf("@");
			if (n > 0) {			
				//for users
				marker.data.popup += '<b>Profile</b>: <a href="' + gateway.title + 'social?SO_FUNC=ViewPeople&UID=' + gateway.username + '" target=prof title=Profile>' + gateway.username + '</a><br>';
				//marker.data.popup += '<b>Contact</b>: <a href="' + gateway.title + 'chat?CHAT_FUNC=newChatRoom&INVITE=' + gateway.username + '" target=chat title=Chat>' + gateway.username + '</a><br>';
			} else {
				//for bots
				marker.data.popup += '<b>Profile</b>:' + gateway.username + '<br>';
				marker.data.popup += '<b>Contact</b>:' + gateway.username + '<br>';	
			}
        } else {
            marker.data.popup += '<b>Owner</b>: Unknown owner<br>';
        }

        //marker.data.popup += '<b>Altitude (m)</b>: ' + (gateway.altitude ? gateway.altitude : 'Not specified') + '<br>';
        //marker.data.popup += '<b>Cloud</b>: ' + (gateway.placement ? gateway.placement : 'Not specified') + '<br>';
		//marker.data.popup += '<b>Cloud</b>: ' + (gateway.placement ? gateway.placement : 'Not specified') + '<br>';
        //marker.data.popup += '<b>Service</b>: ' + (gateway.brand ? gateway.brand : 'Not specified') + '<br>';
        //marker.data.popup += '<b>Product</b>: ' + (gateway.model ? gateway.model : 'Not specified') + '<br>';
        //marker.data.popup += '<b>Antenna model</b>: ' + (gateway.antenna_model ? gateway.antenna_model : 'Not specified');
		//marker.data.popup += '<b>System</b>: ULAPPH Cloud Desktop' + '<br>';	
		marker.data.popup += '<b>Google Map</b>: <a href="https://www.google.com/maps/place/' + gateway.lat + ',' + gateway.lon + '" target=vmap>Show Location Map</a>' + '<br>';	
		marker.data.popup += '<b>Tracker</b>: <a href="/pwa/tracker/realtime.html?xuid=' + gateway.username + '&xhost=' + gateway.title  + '" target=tracker>Realtime Tracker</a>' + '<br>';	
		marker.data.popup += '<b>Activity</b>: ' + (gateway.antenna_model ? gateway.antenna_model : 'Not specified');
		
        return marker;
    }

    function draw_gateway(list_gateway) {
		console.log("list_gateway: "+list_gateway);
        var pruneCluster = window._data_gateway.cluster;

        pruneCluster.RemoveMarkers();
        for (var i = 0; i < list_gateway.length; i++) {
            if (window._target_gateway == list_gateway[i].pk) {
                window._data_gateway.map.setZoom(12);
                //window._data_gateway.map.panTo(new L.LatLng(list_gateway[i].lat, list_gateway[i].lon));
		//map.panTo(new L.LatLng(40.737, -73.923));
		//sent PH center at 14.6515619,121.0494018
                window._data_gateway.map.panTo(new L.LatLng(14.6515619, 121.0494018));
            }
			console.log("list_gateway[]: "+list_gateway[i]);
            pruneCluster.RegisterMarker(draw_this_gateway(list_gateway[i]));
        }
        pruneCluster.ProcessView();
    }

    $(window).on('map:init', function (e) {

        var detail = e.originalEvent ?
                e.originalEvent.detail : e.detail;

        if (detail.id != 'gateway_map')
            return ;

        var map = detail.map;

        window._data_gateway = window._data || {};
        window._data_gateway.map = map;
        window._data_gateway.cluster = new PruneClusterForLeaflet();
        window._data_gateway.cluster.Cluster.Size = 5;

        map.addLayer(window._data_gateway.cluster);

        map.scrollWheelZoom.disable();
        map.on('focus', function() { map.scrollWheelZoom.enable(); });
        map.on('blur', function() { map.scrollWheelZoom.disable(); });

        map.setView([25, 0], 2);

        $.get(window._gateways_list_url, function(data) {
			console.log("data: "+data);
            window._gateway_list = JSON.parse(data);
            draw_gateway(window._gateway_list);
        });

    });

})();
