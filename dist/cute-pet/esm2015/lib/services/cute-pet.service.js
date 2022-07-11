import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CutePetService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'https://petstore3.swagger.io/api/v3/pet';
    }
    getPetsByStatus(status) {
        return this.http.get(`${this.apiURL}/findByStatus?status=${status}`);
    }
    getPetById(id) {
        return this.http.get(`${this.apiURL}/${id}`);
    }
    deletePet(id) {
        return this.http.delete(`${this.apiURL}/${id}`, {
            headers: new HttpHeaders().set('api_key', ''),
        });
    }
    editPet(pet) {
        return this.http.put(this.apiURL, pet);
    }
    createPet(pet) {
        return this.http.post(this.apiURL, pet).pipe(take(1));
    }
}
CutePetService.ɵfac = function CutePetService_Factory(t) { return new (t || CutePetService)(i0.ɵɵinject(i1.HttpClient)); };
CutePetService.ɵprov = i0.ɵɵdefineInjectable({ token: CutePetService, factory: CutePetService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CutePetService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3V0ZS1wZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2N1dGUtcGV0L3NyYy9saWIvc2VydmljZXMvY3V0ZS1wZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUcvRCxPQUFPLEVBQVMsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUs3QyxNQUFNLE9BQU8sY0FBYztJQUd6QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRm5CLFdBQU0sR0FBRyx5Q0FBeUMsQ0FBQztJQUU3QixDQUFDO0lBRXhDLGVBQWUsQ0FBQyxNQUFjO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLE1BQU0sd0JBQXdCLE1BQU0sRUFBRSxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFNBQVMsQ0FBQyxFQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQzlDLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBaUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBaUI7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs0RUEzQlUsY0FBYztzREFBZCxjQUFjLFdBQWQsY0FBYyxtQkFGYixNQUFNO3VGQUVQLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDdXRlUGV0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvY3V0ZS1wZXQubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDdXRlUGV0U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgYXBpVVJMID0gJ2h0dHBzOi8vcGV0c3RvcmUzLnN3YWdnZXIuaW8vYXBpL3YzL3BldCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldFBldHNCeVN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IE9ic2VydmFibGU8Q3V0ZVBldE1vZGVsW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDdXRlUGV0TW9kZWxbXT4oXG4gICAgICBgJHt0aGlzLmFwaVVSTH0vZmluZEJ5U3RhdHVzP3N0YXR1cz0ke3N0YXR1c31gXG4gICAgKTtcbiAgfVxuXG4gIGdldFBldEJ5SWQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Q3V0ZVBldE1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q3V0ZVBldE1vZGVsPihgJHt0aGlzLmFwaVVSTH0vJHtpZH1gKTtcbiAgfVxuXG4gIGRlbGV0ZVBldChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmFwaVVSTH0vJHtpZH1gLCB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ2FwaV9rZXknLCAnJyksXG4gICAgfSk7XG4gIH1cblxuICBlZGl0UGV0KHBldDogQ3V0ZVBldE1vZGVsKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KHRoaXMuYXBpVVJMLCBwZXQpO1xuICB9XG5cbiAgY3JlYXRlUGV0KHBldDogQ3V0ZVBldE1vZGVsKTogT2JzZXJ2YWJsZTxDdXRlUGV0TW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmFwaVVSTCwgcGV0KS5waXBlKHRha2UoMSkpO1xuICB9XG59XG4iXX0=