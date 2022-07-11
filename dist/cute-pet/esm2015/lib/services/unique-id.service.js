import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class UniqueIdService {
    constructor() { }
    generateRandomId() {
        return Math.floor(Math.random() * 100);
    }
    // TO DO: implement logic to not overwrite an existent id
    checkIdExists(list, id) {
        return true;
    }
}
UniqueIdService.ɵfac = function UniqueIdService_Factory(t) { return new (t || UniqueIdService)(); };
UniqueIdService.ɵprov = i0.ɵɵdefineInjectable({ token: UniqueIdService, factory: UniqueIdService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UniqueIdService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWlkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdXRlLXBldC9zcmMvbGliL3NlcnZpY2VzL3VuaXF1ZS1pZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxlQUFlO0lBQzFCLGdCQUFlLENBQUM7SUFFaEIsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQseURBQXlEO0lBQ3pELGFBQWEsQ0FBQyxJQUFRLEVBQUUsRUFBVTtRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OzhFQVZVLGVBQWU7dURBQWYsZUFBZSxXQUFmLGVBQWUsbUJBRmQsTUFBTTt1RkFFUCxlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHV1aWQgZnJvbSAndXVpZCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlxdWVJZFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2VuZXJhdGVSYW5kb21JZCgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICB9XG5cbiAgLy8gVE8gRE86IGltcGxlbWVudCBsb2dpYyB0byBub3Qgb3ZlcndyaXRlIGFuIGV4aXN0ZW50IGlkXG4gIGNoZWNrSWRFeGlzdHMobGlzdDogW10sIGlkOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19