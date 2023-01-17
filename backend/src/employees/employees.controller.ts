import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { EmployeeService } from 'src/employee.service';
  import { Employee } from 'src/entities/employee.entity';
  
  @Controller('employees')
  export class EmployeesController {
    constructor(private employeeService: EmployeeService) {}
  
    @Get()
    read(): Promise<Employee[]> {
      return this.employeeService.readAll();
    }
  
    @Post('create')
    async create(@Body() employee: Employee): Promise<any> {
      return this.employeeService.create(employee);
    }
  
    @Put(':id/update')
    async update(@Param('id') id, @Body() employee: Employee): Promise<any> {
      employee.id = Number(id);
      return this.employeeService.update(employee);
    }
  
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.employeeService.delete(id);
    }
  }
  