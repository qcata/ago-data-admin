// assets
import { IconSettings } from '@tabler/icons';

// constant
const icons = {
    IconSettings
};

const settings = {
    id: 'settings',
    type: 'group',
    children: [
        {
            id: 'settings-page',
            title: 'Settings',
            type: 'collapse',
            icon: icons.IconSettings,
            children: [
                {
                    id: 'lands',
                    title: 'Lands',
                    type: 'item',
                    url: 'settings/land',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default settings;
