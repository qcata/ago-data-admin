// assets
import { IconBrandChrome, IconHelp, IconSitemap, IconSeeding } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap,
    IconSeeding
};

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'crops',
            title: 'Crops',
            type: 'item',
            url: '/crops',
            icon: icons.IconSeeding,
            breadcrumbs: false
        }
    ]
};

export default other;
