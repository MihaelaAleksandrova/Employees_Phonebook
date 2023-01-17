// import { AppModule } from './app.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeesController } from './employees/employees.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'employees-phonebook',
      username: 'root',
      password: 'root',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Employee]),
  ],
  controllers: [AppController, EmployeesController],

  providers: [AppService, EmployeeService],
})
export class AppModule {}

