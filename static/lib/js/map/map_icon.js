function create_icon_community(path) {
    var path = window._path_icon_community;

    if (!path) return null;

    var myIcon = L.icon({
        iconUrl: path,
        iconRetinaUrl: path,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    return (myIcon)
}

function create_icon_gateway(path) {
    var path = window._path_icon_gateway;

    if (!path) return null;

    var myIcon = L.icon({
        iconUrl: path,
        iconRetinaUrl: path,
        iconSize: [20, 31],
        iconAnchor: [10, 31]
    });
    return (myIcon)
}

function create_icon_gateway_planned(path) {
    var path = window._path_icon_gateway_planned;

    if (!path) return null;

    var myIcon = L.icon({
        iconUrl: path,
        iconRetinaUrl: path,
        iconSize: [20, 31],
        iconAnchor: [10, 31]
    });

    return (myIcon)
}

function create_icon_gateway_offline(path) {
    var path = window._path_icon_gateway_offline;

    if (!path) return null;

    var myIcon = L.icon({
        iconUrl: path,
        iconRetinaUrl: path,
        iconSize: [20, 31],
        iconAnchor: [10, 31]
    });

    return (myIcon)
}

$(window).on('map:init', function (e) {
    window._icon = {
        gateway: create_icon_gateway(),
        gateway_planned: create_icon_gateway_planned(),
        gateway_offline: create_icon_gateway_offline(),
        community: create_icon_community(),
    };
});
