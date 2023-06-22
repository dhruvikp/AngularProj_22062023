

export class ServersService {
    public servers = [
        {
            id:1,
            name: 'Production Server',
            status: 'Online'
        },
        {
            id:2,
            name: 'Test Server',
            status:'Offline'
        },
        {
            id:3,
            name:'Dev Server',
            status:'Online'
        }
    ]

    getServers() {
        return this.servers;
    }

}