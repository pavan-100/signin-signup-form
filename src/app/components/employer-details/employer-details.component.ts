import { Component, OnInit } from '@angular/core';
import { EmployerDetailsService } from "../../components/employer-details/employer-details.service";
import { Employee } from "src/app/entities/employee";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employer-details',
  templateUrl: './employer-details.component.html',
  styleUrls: ['./employer-details.component.css']
})

export class EmployerDetailsComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  employee: Employee;
  employeeData: any = {};

  constructor(public _employerService: EmployerDetailsService,   public restApi: EmployerDetailsService,
    public actRoute: ActivatedRoute,
    public router: Router) {
    this.employee = new Employee();
  }
  ngOnInit() {
    this.restApi.getEmployee(this.id).subscribe((data: {}) => {
      this.employeeData = data;
    })
  }
  loadEmployees() {
    return this._employerService.getEmployees().subscribe((data: any) => {
      if (data) {
        this.employee = data;
        console.log(this.employee);
      }
    });
  }
   deleteEmployee(id: any) {
     if (window.confirm("Are u sure u want to delete?")) {
       this._employerService.deleteEmployee(id).subscribe(data => {
         this.loadEmployees();
      });
    }
  }
      updateEmployee() {
        if(window.confirm('Are you sure, you want to update?')){
          this.restApi.updateEmployee(this.id, this.employeeData).subscribe(data => {
            this.router.navigate(['/employees-list'])
          })
     }
     }
    }

