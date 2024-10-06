import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

@ApiTags('Health Check')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private memory: MemoryHealthIndicator,
    private mongooseHealth: MongooseHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        this.http.pingCheck('api-service', `${process.env.API_SERVICE_URL}/up`),
      () =>
        this.http.pingCheck('auth-client', `${process.env.AUTH_CLIENT_URL}/up`),
      () =>
        this.http.pingCheck(
          'admin-client',
          `${process.env.ADMIN_CLIENT_URL}/up`,
        ),
      () =>
        this.http.pingCheck(
          'tutor-client',
          `${process.env.STUDENT_CLIENT_URL}/up`,
        ),
      () =>
        this.http.pingCheck(
          'student-client',
          `${process.env.TUTOR_CLIENT_URL}/up`,
        ),
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
      () => this.mongooseHealth.pingCheck('database'),
    ]);
  }
}
