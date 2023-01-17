import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}
  async create(employee: Employee): Promise<Employee> {
    return await this.employeeRepository.save(employee);
  }

  async readAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async update(employee: Employee): Promise<UpdateResult> {
    return await this.employeeRepository.update(employee.id, employee);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.employeeRepository.delete(id);
  }
}
