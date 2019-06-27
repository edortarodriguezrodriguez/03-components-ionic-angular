export class ListItem {

    icon: string;
    name: string;
    redirectTo: string;

    constructor(icon: string,
                name: string,
                redirectTo: string) {
        this.icon = icon;
        this.name = name;
        this.redirectTo = redirectTo;
    }

}
