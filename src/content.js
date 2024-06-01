import React from 'react';
import VisualImage from './components/visual_image';
import Locations from './components/locations';
import StatusList from './components/status_list';

function Content() {
    const statusItems = [
        { name: 'MQ-1 Predator', status: 'offline' },
        { name: 'RQ-4 Global Hawk', status: 'online' },
        { name: 'MQ-9 Reaper', status: 'online' },
        { name: 'RQ-7 Shadow', status: 'online' },
        { name: 'ScanEagle', status: 'online' },
        { name: 'Wasp III', status: 'online' },
        { name: 'Taranis', status: 'offline' },
        { name: 'Hermes 450', status: 'online' },
        { name: 'Heron TP', status: 'online' },
        { name: 'Eitan', status: 'online' },
        { name: 'Sky Guardian', status: 'online' },
        { name: 'Gray Eagle', status: 'online' },
        { name: 'Protector RG Mk1', status: 'online' },
        { name: 'X-47B', status: 'offline' },
        { name: 'Triton', status: 'online' },
        { name: 'Fire Scout', status: 'online' },
        { name: 'Switchblade', status: 'online' },
        { name: 'Raven', status: 'online' },
        { name: 'Puma', status: 'online' },
        { name: 'Black Hornet Nano', status: 'online' },
        { name: 'SkyRanger', status: 'online' },
        { name: 'S-100 Camcopter', status: 'online' },
        { name: 'Bayraktar TB2', status: 'online' },
        { name: 'Anka-S', status: 'online' },
        { name: 'CH-4 Rainbow', status: 'online' },
        { name: 'Wing Loong II', status: 'online' },
        { name: 'RQ-170 Sentinel', status: 'offline' },
        { name: 'RQ-11B Raven', status: 'online' },
        { name: 'Shadow RQ-7B', status: 'online' },
        { name: 'RQ-21 Blackjack', status: 'online' },
        { name: 'Orlan-10', status: 'online' },
        { name: 'Elbit Hermes 900', status: 'online' },
        { name: 'Harop', status: 'online' },
        { name: 'Kargu', status: 'online' },
        { name: 'Seeker 400', status: 'online' },
        { name: 'Falco EVO', status: 'online' },
        { name: 'IAI Searcher', status: 'online' },
        { name: 'Hunter MQ-5B', status: 'offline' },
        { name: 'Phoenix Ghost', status: 'online' },
        { name: 'Northrop Grumman X-47A', status: 'offline' },
        { name: 'RQ-2 Pioneer', status: 'offline' },
        { name: 'Zala 421-16E', status: 'online' },
        { name: 'T-Hawk', status: 'online' },
        { name: 'Global Observer', status: 'offline' },
        { name: 'Avenger', status: 'online' },
        { name: 'K-MAX', status: 'online' },
        { name: 'RQ-3 DarkStar', status: 'offline' },
        { name: 'RQ-5 Hunter', status: 'offline' },
        { name: 'RQ-8A Fire Scout', status: 'online' },
        { name: 'RQ-15 Neptune', status: 'offline' },
        { name: 'RQ-20 Puma', status: 'online' },
        { name: 'RQ-21A Blackjack', status: 'online' },
        { name: 'MQ-18 Hummingbird', status: 'offline' },
        { name: 'Phoenix', status: 'online' },
        { name: 'Dragon Eye', status: 'online' },
        { name: 'Silver Fox', status: 'online' },
        { name: 'RQ-14 Dragon Eye', status: 'online' },
        { name: 'MQ-8C Fire Scout', status: 'online' },
        { name: 'RQ-23 TigerShark', status: 'offline' },
        { name: 'MQ-5B Hunter', status: 'offline' },
        { name: 'RQ-11 Raven', status: 'online' },
        { name: 'V-BAT', status: 'online' },
        { name: 'XQ-58A Valkyrie', status: 'online' },
        { name: 'AeroVironment Wasp', status: 'online' },
        { name: 'RQ-2B Pioneer', status: 'offline' },
        { name: 'Aerostar', status: 'online' },
        { name: 'RQ-5A Hunter', status: 'offline' },
        { name: 'RQ-4A Global Hawk', status: 'online' },
        { name: 'DJI Matrice 600', status: 'online' },
        { name: 'DJI Phantom 4', status: 'online' },
        { name: 'DJI Inspire 2', status: 'online' },
        { name: 'Parrot Anafi', status: 'online' },
        { name: 'Parrot Disco', status: 'online' },
        { name: 'Lockheed Martin Stalker', status: 'online' },
        { name: 'Boeing Insitu Integrator', status: 'online' },
        { name: 'Boeing MQ-25 Stingray', status: 'online' },
        { name: 'Dassault nEUROn', status: 'offline' },
        { name: 'Northrop Grumman Firebird', status: 'online' },
        { name: 'MQ-1C Gray Eagle', status: 'online' },
        { name: 'AeroVironment Switchblade', status: 'online' },
        { name: 'AeroVironment Quantix', status: 'online' },
        { name: 'UAV Factory Penguin B', status: 'online' },
        { name: 'Textron Aerosonde', status: 'online' },
        { name: 'General Atomics MQ-1C Gray Eagle', status: 'online' },
        { name: 'General Atomics MQ-20 Avenger', status: 'online' },
    ];
    
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            <div className="bg-gray-200 rounded-lg shadow p-4 col-span-1 row-span-1">
                <VisualImage/>
            </div>
            <div className="bg-gray-200 rounded-lg shadow p-4 col-span-1 row-span-1">
                <StatusList items={statusItems}/>
            </div>
            <div className="bg-gray-200 rounded-lg shadow p-4 col-span-2 row-span-1">
                <Locations/>
            </div>
        </div>
    );
}

export default Content;