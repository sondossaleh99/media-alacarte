import { NavMenu } from "../enums";

export class NavMenuLookup {
    static getLookup() {
        return [
            { id: NavMenu.PLATFORM, label: 'Platform' },
            { id: NavMenu.FEATURES, label: 'Features' },
            { id: NavMenu.BENEFITS, label: 'Benefits' },
            { id: NavMenu.CONTACTUS, label: 'Contact Us' },
            { id: NavMenu.ABOUTUS, label: 'About Us' }
        ];
    }
}